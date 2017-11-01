/* eslint-disable */
const router = require('express').Router()
const users = require('../../models/users')
const usersDb = require('../../models/db/users')
const posts = require('../../models/db/posts')
const middleware = require('../middleware')

router.use(middleware.setDefaultResponseLocals);

router.get('/', (req, res) => {
  res.render('posts/index');
});

router.get('/signup', (req, res) => {
  res.render('users/signup');
});

router.post('/signup', (req, res) => {
  users.create(req.body)
  .then((user) => {
    if (user) return res.redirect('/');// will need to redirect to the users profile page
  })
  .catch((error) => next (error));
})

router.get('/login', (req, res) => {
  res.render('users/login', {error: false});
});

router.post('/login', (req, res) => {
  const { email, password } = req.body;
  users.verify(email, password)
  .then((userId) => {
    if (!userId) {
      const error = 'Invalid username or password';
      res.render('users/login', { error: error })
    } else {
      req.session.user = userId;
      res.redirect(`/profile/public/${userId}`);// will need to redirect to the users profile page
    }
  })
  .catch((error) => next(error) );
});

router.use(middleware.isLoggedIn);

router.get('/profile/public/:id', (req, res) => {
  const userId = req.params.id;
  usersDb.findById(userId)
  .then((user) => {
    posts.findByUserId(user.id)
    .then((posts) => {
      return res.render('users/public_profile', { user, posts })
    });
  })
  .catch((error) => next(error));
});

router.get('/profile/private/:id', (req, res) => {
  const userId = req.params.id;
  usersDb.findById(userId)
  .then((user) => {
    return res.render('users/private_profile', {
      user
    })
  })
  .catch((error) => next(error));
});

router.get('/logout', (req, res) => {
  res.clearCookie('session_id');
  res.locals.isLoggedIn = false;
  req.session.destroy(() => {
    res.redirect('/');
  });
});

router.get('/show/:id', (req, res) => {
  const postId = req.params.id;
  posts.findById(postId) // need to write posts db function to find by post id
  .then((post) => {
    usersDb.findById(post.user_id)
    .then((user) => {
      return res.render('posts/post', { user, post })
    })
  })
  .catch((error) => next(error));
});

module.exports = router;

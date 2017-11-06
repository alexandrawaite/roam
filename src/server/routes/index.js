/* eslint-disable */
const router = require('express').Router()
const users = require('../../models/users')
const usersDb = require('../../models/db/users')
const posts = require('../../models/db/posts')
const cities = require('../../models/db/cities')
const middleware = require('../middleware')

router.use(middleware.setDefaultResponseLocals);


router.get('/signup', (req, res) => {
  res.render('users/signup', { city: false });
});

router.post('/signup', (req, res) => {
  users.create(req.body)
  .then((user) => {
    if (user) return res.redirect('/');
  })
  .catch((error) => next (error));
})

router.get('/login', (req, res) => {
  res.render('users/login', {error: false, city: false});
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
      res.redirect(`/profile/public/${userId}`);
    }
  })
  .catch((error) => next(error) );
});

router.use(middleware.isLoggedIn);

router.get('/', (req, res) => {
  const { user } = req.session
  cities.findByCity()
  .then((cities) => {
    res.render('posts/index', { user, cities, city: false });
  })
  .catch((error) => next (error))
});

router.get('/profile/public/:id', (req, res) => {
  const { user }  = req.session;
  const userId = req.params.id;
  usersDb.findById(userId)
  .then((user) => {
    posts.findByUserId(user.id)
    .then((posts) => {
      return res.render('users/public_profile', { user, posts, city: false })
    });
  })
  .catch((error) => next(error));
});

router.get('/profile/private', (req, res) => {
  const { user }  = req.session;
  usersDb.findById(user)
  .then((foundUser) => {
    return res.render('users/private_profile', {
      user: foundUser,
      city: false
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
  posts.findById(postId)
  .then((post) => {
    usersDb.findById(post.user_id)
    .then((user) => {
      return res.render('posts/post', { user, post, city: false })
    })
  })
  .catch((error) => next(error));
});

router.get('/user/update/:id', (req, res) => {
  const user = req.params.id
  res.status(200).render('users/update_form', {user, city: false})
})

router.post('/user/update', (req, res) => {
  const { full_name, current_city } = req.body
  const { user } = req.session
  usersDb.updateProfileById(full_name, current_city, user)
    .then(() => {
      return res.redirect(`/profile/private/${user}`)
    })
    .catch(error => res.send(error.message))
})

router.get('/cities/:id', (req, res) => {
  const { user } = req.session;
  const cityId = req.params.id
  cities.findById(cityId)
  .then((city) => {
    return res.render('posts/city_page', {user, city})
  })
  .catch((error) => next(error));
})

module.exports = router;

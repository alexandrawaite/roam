const router = require('express').Router();
const users = require('../../models/users');
// const postsRoutes = require('./posts');
const posts = require('../../models/posts');

router.get('/', (req, res) => {
  res.render('posts/index');
});

router.get('/signup', (req, res) => {
  res.render('users/signup');
});

router.post('/signup', (req, res) => {
  users.create(req.body)
  .then( user => {
    if (user) return res.redirect('/');//will need to redirect to the users profile page
  })
  .catch( error => next(error) );
})

router.get('/login', (req, res) => {
  res.render('users/login', {error: false});
});

router.post('/login', (req, res) => {
  const { email, password } = req.body;
  users.verify(email, password)
  .then( userId => {
    if (!userId) {
      const error = 'Invalid username or password';
      res.render('users/login', { error: error})
    } else {
      req.session.user = userId;
      res.render('users/public_profile');//will need to redirect to the users profile page
    }
  })
  .catch( error => next(error) );
});

module.exports = router;

const router = require('express').Router();
// const postsRoutes = require('./posts');
const posts = require('../../models/posts');

router.get('/', (req, res) => {
  res.render('posts/index');
});

module.exports = router;
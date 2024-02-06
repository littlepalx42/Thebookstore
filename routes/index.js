var express = require('express');
var router = express.Router();

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });
router.get('/', function(req, res, next) {
  res.render('index');
});
router.get('/about', function(req, res, next) {
  res.render('about');
});
router.get('/signup', function(req, res, next) {
  res.render('signup');
});
router.get('/form', function(req, res, next) {
   const u = req.query;
  //  res.json(u)
   res.render('form', {data:u})
});

module.exports = router;

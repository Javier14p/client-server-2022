var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
//   res.render('users', { title: 'Users View', message: 'You are in the user view :D' });
  res.send('respond with a resource, you are in the users list!');
});



module.exports = router;
const { request } = require('express');
var express = require('express');
const { db } = require('../config');
var router = express.Router();

const languages = require('../services/languages');

/* GET leguages listing. */
router.get('/', async function(req, res, next) {
  try{
    res.json(await languages.getMultiple(req.query.page));
  }
  catch(err){
    console.error('Error' + err.message);
    next(err);
  }

//   try{
//     res.json(await languages.create(req.body));
//   }
//   catch(error){
//     console.log('Error while creating a language', error.message);
//     next(error);
//   }
});



module.exports = router;
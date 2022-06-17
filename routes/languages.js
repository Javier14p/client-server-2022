const { request } = require('express');
var express = require('express');
const { db } = require('../config');
var router = express.Router();

const languages = require('../services/languages');


//JAVIER EULOGIO PONCE BARRAZA
/* GET leguages listing. */
//SHOW IN THE PAGE NOT IN POSTMAN
router.get('/', async function(req, res, next){
  const users = require('../services/languages');
  try{
    res.json(await users.getMultiple(req.query.page));
  }
  catch(err){
    console.error('Error' + err.message);
    next(err);
  }
  
});

//CODE FOR GET
router.get('/', async function(req, res, next) {
  try{
    res.json(await languages.getMultiple(req.query.page));
  }
  catch(err){
    console.error('Error' + err.message);
    next(err);
  }

});


//CODE FOR POST

router.post('/', async function(req, res, next) {

  try{
    res.json(await languages.create(req.body));
  }
  catch(error){
    console.log('Error while creating a language', error.message);
    next(error);
  }

});

//CODE FOR PUT (UPDATE)

router.put('/:id', async function(req, res, next){
  try{
      res.json(await languages.update(req.params.id, req.body));
  } catch (error){
      console.log('Error while updating a language', error.message);
      next(error);
  }

  
});

//CODE FOR DELETE
router.delete('/:id', async function(req, res, next){
  try{
      res.json(await languages.remove(req.params.id));
  } catch (error){
      console.log('Error while DELETING a language', error.message);
      next(error);
  }

  
});



module.exports = router;
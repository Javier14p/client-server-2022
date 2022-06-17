const db = require('./db');
const helper = require('../helper');
const config = require('../config');

//JAVIER EULOGIO PONCE BARRAZA
//THIS IS TO SHOW THE RECORDS IN THE PAGE, NOT IN POSTMAN
async function getMultiple(page = 1){
    const offset = helper.getOffset(page, config.listPerPage);
    const rows = await db.query(
        `SELECT id, name, description, year 
        FROM languages LIMIT ${offset}, ${config.listPerPage}
        `
    );
    const data = helper.emptyOrRows(rows);
    const meta = {page};

    return {
        data,
        meta
    }
}

//THIS IS FOR GET
async function getUsersM(page = 1){
    const offset = helper.getOffset(page, config.listPerPage);
    const rows = await db.query(
        `SELECT id, username, password, email, role 
        FROM users LIMIT ${offset}, ${config.listPerPage}
        `
    );
    const data = helper.emptyOrRows(rows);
    const meta = {page};

    return {
        data,
        meta
    }
}

//THIS IS FOR POST
async function create(language){
    console.log(`INSERT INTO languages
    (name, description, year)
    VALUES
    ('${language.name}', '${language.description}', ${language.year})
    `);
  
    const result = await db.query(
      `INSERT INTO languages (name, description, year) VALUES
      ('${language.name}', '${language.description}', ${language.year})
      `
    );
  
    let message = "Error in creating programming language";
    if(result.affectedRows){
      message = "A new language has been added!";
    }
  
    return {message}
  }

//THIS IS FOR PUT
  async function update(id,language){
    const result = await db.query(
        `UPDATE languages 
        SET 
        name = '${language.name}', 
        description = '${language.description}', 
        year = ${language.year}
        WHERE id= ${id}
        `
    );
 
    let message = "Error in updateing a programming language";
    if (result.affectedRows){
        message = "A language has been updated!";
    }
 
    return {message}
 }

 //THIS IS FOR DELETE
 async function remove(id){
    const result = await db.query(
        `DELETE FROM languages 
        WHERE id= ${id}
        `
    );
 
    let message = "Error in DELETING a programming language";
    if (result.affectedRows){
        message = "A language has been deleted!";
    }
 
    return {message}
 }


  

module.exports = {
    getUsersM,
    getMultiple,
    create,
    update,
    remove
};
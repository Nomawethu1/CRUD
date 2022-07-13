const pool = require("../config/config");

const createItem = (request, response) => {
    const { itemname, description, duedate } = request.body
  
    pool.query('INSERT INTO item (itemname, description, duedate) VALUES ($1, $2,$3) RETURNING *', [itemname, description, duedate], (error, results) => {
      if (error) {
        throw error
      }
      response.status(201).send(`item added with ID: ${results.rows[0].id}`)
    })
  }

  module.exports = {
    createItem
    
  }
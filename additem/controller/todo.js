const pool = require("../config/config");
// const express=require("express");
// const app =express();
// const bodyparser =require("body-parser");
// const { request, response } = require("express");

const createItem = (request, response) => {
    const { itemname, description, duedate } = request.body
  
    pool.query('INSERT INTO items (itemname, description, duedate) VALUES ($1, $2,$3) RETURNING *', [itemname, description, duedate], (error, results) => {
      if (error) {
        throw error
      }
      response.status(201).send(`item added with ID: ${results.rows[0].id}`)
    })
  }

  module.exports = {
    createItem
    
  }
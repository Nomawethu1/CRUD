const { response } = require("express");
const pool=require("../config/config");

const getItems=(request,response) =>{


    pool.query('SELECT * FROM item ORDER BY duedate DEC',(error,results)=>{

        if(error)
        {

            throw error
        }
        response.status(201).json(results.rows)
    }
    )
}

module.exports={

    getItems
}
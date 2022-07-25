const { response } = require("express");
const pool=require("../config/config");

// const getItemById=(request,response) =>{

//     const id=parseInt(request.paramas.id)


//     pool.query('SELECT * FROM item WHERE id = $1',[id],(error,results)=>{

//         if(error)
//         {

//             throw error
//         }
//         response.status(201).json(results.rows)
//     }
//     )
// }

const getItemById = (request, response) => {
    const id = parseInt(request.params.id)
  
    pool.query('SELECT * FROM item WHERE id = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }

module.exports={
    getItemById
}
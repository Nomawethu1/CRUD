
const { response } = require("express");
const pool=require("../config/config");


const deleteItem=(request,response)=>
{

const id =parseInt(request.params.id)


pool.query('DELETE FROM item WHERE id = $1',[id],(error,results)=>
{
    if(error)
    {

        throw error
    }

    response.status(200).send(`item deleted with ID : ${id}`)
})
}

module.exports={

    deleteItem
}

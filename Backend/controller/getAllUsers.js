const pool=require("../config/config");

const getAllUsers=(request,response) =>{


    pool.query('SELECT * FROM tblRegister ',(error,results)=>{

        if(error)
        {

            throw error
        }
        response.status(201).json(results.rows)
    }
    )
}

module.exports={

    getAllUsers
}
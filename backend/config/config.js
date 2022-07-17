const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'TodoList',
  password: '174951',
  port: 5432,
})

pool.connect((err) =>{
    if(err){
        console.log(err, 'cannot connect to the DB')
    }
    else{       
        console.log('CONNECTED TO THE DB');
    }
})

module.exports =pool;
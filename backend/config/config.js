const Pool = require('pg').Pool
// const pool = new Pool("postgres://fxarrraqzxyuak:6730a1bbc832d76d2f2da0d1069315dd4f78c0010298e71906dcda81738b5710@ec2-52-71-23-11.compute-1.amazonaws.com:5432/d2cjd0a8ddb2ks")

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: 'Letsdoit!',
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

module.exports = pool;
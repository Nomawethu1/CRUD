// const Pool = require('pg').Pool
// const pool = new Pool({
//   user: 'postgres',
//   host: 'localhost',
//   database: 'postgres',
//   password: 'Letsdoit!',
//   port: 5432,
// })

// const createItem = (request, response) => {
//     const { itemName, description,date } = request.body
  
//     pool.query('INSERT INTO users (itemName, description,date) VALUES ($1, $2,$3) RETURNING *', [itemName, description,date], (error, results) => {
//       if (error) {
//         throw error
//       }
//       response.status(201).send(`item added with ID: ${results.rows[0].id}`)
//     })
//   }

//   module.exports = {
//     createItem
    
//   }
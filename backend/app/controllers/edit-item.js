const client = require('../configs/db');

  const updateEdit = (request, response) => {
    const id = parseInt(request.params.id)
    const { title, description,due_date } = request.body
  
    client.query(
      'UPDATE todo SET title = $1, description = $2, due_date = $3 WHERE id =$4',
      [title, description, due_date,id],
      (error, results) => {
        if (error) {
          throw error
        }
        response.status(200).send(`User modified with ID: ${id}`)
      }
    )
  }

  module.exports ={
      updateEdit
  }
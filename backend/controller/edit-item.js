const client = require('../config/config');

  const updateEdit = (request, response) => {
    const id = parseInt(request.params.id)
    const { itemname, description,duedate } = request.body
  
    client.query(
      'UPDATE item SET itemname = $1, description = $2, duedate = $3 WHERE id =$4',
      [itemname, description, duedate,id],
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
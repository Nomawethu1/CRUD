module.exports = app => {
   
      // import your controllers here!!
    const create = require("../controller/add-item");
    const update = require('../controller/edit-item');

    
     // create your routes here!!
    app.post('/add', create.createItem)
    app.put('/edit/:id', update.updateEdit)
    
  }
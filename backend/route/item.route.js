const { get } = require("express/lib/response");

module.exports = app => {
   
      // import your controllers here!!
    const create = require("../controller/add-item");
    const update = require('../controller/edit-item');
    const getItem=require('../controller/getItems');
    const getItemById=require('../controller/getItemById');

    
     // create your routes here!!
    app.post('/add', create.createItem)
    app.put('/edit/:id',update.updateEdit)
    app.get('/getItem',getItem.getItems)
    app.get('/getItem/:id',getItemById.getItemById)
   
    
  }
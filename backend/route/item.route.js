const { get } = require("express/lib/response");

module.exports = app => {
   
      // import your controllers here!!
    const create = require("../controller/add-item");
    const update = require('../controller/edit-item');
    const getItems=require('../controller/getItems');
    const getItemById=require('../controller/getItemById');
    const delItem= require('../controller/delete-Item');

    
     // create your routes here!!
    app.post('/add', create.createItem)
    app.put('/edit/:id',update.updateEdit)
    app.get('/getItems',getItems.getItems)
    app.get('/getItem/:id',getItemById.getItemById)
    app.delete('/delete/:id',delItem.deleteItem)
   
    
  }
// const express = require("express");
// const router = express.Router();
// const app=express();


// const {createItem} = require("../controller/todo")

// // module.exports = router;

// module.exports = {
//     createItem
    
//   }


module.exports = app => {
   
    const create = require("../controller/todo");

    app.post('/item', create.createItem)
    
  }

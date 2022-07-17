const express = require('express');
const bodyParser = require('body-parser');

const app = express();
// const db = require('../additem/');
const port = 3000;
// const todopost = require("../additem/route/router")
var corsOptions = {
  origin: "*"
   
};

const cors = require('cors')

app.use(cors());

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.get('/',(request, response) => {
    response.json({ info: 'Node.js, Express, and Postgres API' })
  })

//   app.post('/items',todopost.createItem);

require('./route/item.route')(app)

  app.listen(port, () => {
    console.log(`App running on port ${port}.`)
  })
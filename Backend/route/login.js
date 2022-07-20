const express = require("express");
const app = express();

const login = require('../controller/login');

app.post('/login', login);
module.exports=app;
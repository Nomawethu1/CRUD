const express = require('express') //import express module
const cors = require("cors"); //import cors module
const bodyParser = require('body-parser')
const app = express();

const{login} = require("../controllers/login");

module.exports = {
    login,
}
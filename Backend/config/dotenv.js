const dotenv = require("dotenv");

// dotenv.config(`${process.env.SECRET_KEY}`);

if(process.env.NODE_ENV !== 'production'){
    dotenv.config();

}
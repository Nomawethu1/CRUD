module.exports = app => {
   
    // import your controllers here!!
    const login = require("../controller/login");

    // create your routes here!!
    app.post('/login', login.login)
  }
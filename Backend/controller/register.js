const bcrypt = require("bcrypt");
SECRET_KEY="dgdxfqfhchgq"

const pool = require("../config/config");

const jwt = require("jsonwebtoken");
//Register Function

exports.register = async (req, res) => {
  const { email, password, confirmPassword } = req.body;
  try {
    const data = await pool.query(`SELECT * FROM tblRegister WHERE email= $1;`, [email]); //Check if user exist
    const arr = data.rows;
    if (arr.length != 0) {
      return res.status(400).json({
        error: "Email already there, No need to register again.",
      });

    }
    else {
      bcrypt.hash(password, 10, (err, hash) => {
        const user = {
          email,
          password: hash,
          confirmPassword
        };
        var flag = 1;
        //Inserting data into the database

        pool
          .query(`INSERT INTO tblRegister (email, password, confirmPassword) VALUES ($1,$2,$3);`, [user.email, user.password, user.confirmPassword], (err) => {

            if (err) {
              flag = 0; //If user is not inserted is not inserted to database assigning flag as 0/false.
              console.error(err);
              return res.status(500).json({
                error: "Database error"
              })
            }
            else {
              flag = 1;
              res.status(200).send({ message: 'User added to database, not verified' });
            }
          })
        if (flag) {
          const token = jwt.sign( //Signing a jwt token
            {
              email: user.email
            },
            process.env.SECRET_KEY
          );
        };
      });
    }
  }
  catch (err) {
    console.log(err);
    res.status(500).json({
      error: "Database error while registering user!", //Database connection error
    });
  };
}
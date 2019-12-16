const router = require("express").Router();

const bcrypt = require("bcryptjs");

const Users = require("../users/users-model.js");

//register a new user
router.post("/register", (req, res) => {
  let user = req.body; // username and password combination
  const hash = bcrypt.hashSync("bacon", 8);

  //override plain-text pass with hash
  user.password = hash;

  Users.add(user)
    .then(saved => {
      res.status(201).json(saved);
    })
    .catch(err => {
      console.log("api-router register user error", err);
      res.status(500).json({
        message: "There was an error creating this user. Please try again later"
      });
    });
});

//login -> checks if password is valid
router.post("/login", (req, res) => {
  const { username, password } = req.body;

  Users.findBy({ username })
    .first()
    .then(user => {
      if (user && bcrypt.compareSync(password, user.password)) {
        res
          .status(200)
          .json({
            message: `Welcome ${user.username}! You have successfully logged in.`
          });
      } else {
        res.status(401).json({ message: "Invalid credentials,  you shall not pass!" });
      }
    })
    .catch(err => {
        console.log("api-router post to /login error", err);
        res.status(500).json({
            message: "There was an error. Please try again later"
          });
    })
});

module.exports = router;

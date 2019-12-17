const router = require('express').Router();

const Users = require('./users-model.js');
//importing restricted middlware file which checks if there are session user cookies
const restricted = require('../api/restricted-middleware.js');

//get list of users 
router.get('/', restricted, (req, res)=> {
    Users.find()
    .then(users => {
        res.status(200).json(users);
    })
    .catch(err => {
         console.log("user-router error", err);
         res.status(500).json({ message: "Cannot get users." })
    })
});

module.exports = router;


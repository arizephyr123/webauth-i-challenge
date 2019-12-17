// const express = restrict("express");

// const router = express.Router();

module.exports = (req, res, next) => {
  if (req.session && req.session.user) {
    next();
  } else {
    res.status(401).json( {message: "You must be logged in to see this page."} )
  }
};
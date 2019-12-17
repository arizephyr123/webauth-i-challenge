const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const sessions = require("express-session");
const KnexSessionStore = require("connect-session-knex")(sessions); // to store session in db

const apiRouter = require("./api-router.js");
const authRouter = require("../auth/auth-router.js");
const userRouter = require("../users/users-router.js");
const knex = require("../data/db-config.js");

//const restrictMiddleware = require("./restricted-middleware.js");

const server = express();

//restrictMiddleware(server);

const sessionConfig = {
  //session storage options:
  name: "doolittle",
  secret: "can talk to the animals",
  saveUninitialized: true,
  resave: false,

  //how to store the sessions
  store: new KnexSessionStore({
    //new because constructor
    knex,
    createtable: true,
    clearInterval: 1000 * 60 * 10,
    sidfieldname: "sid",
    tablename: "sessions"
  }),
  //cookie options
  cookie: {
    maxAge: 1000 * 60 * 10,
    secure: false,
    httpOnly: true
  }
};

server.use(helmet());
server.use(cors());
server.use(express.json());
server.use(sessions(sessionConfig)); // adds a req.session object

server.use("/api", apiRouter);
server.use("/api/auth", authRouter);
server.use("/api/users", userRouter);

module.exports = server;

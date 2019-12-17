const knex = require("knex");
const bcrypt = require('bcryptjs');

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("users")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("users").insert([
        {
          id: 1,
          username: "Ari",
          password: bcrypt.hashSync("pass", 8),
          role_id: 1
        },
        {
          id: 2,
          username: "Cassie",
          password: bcrypt.hashSync("pass", 8),
          role_id: 2
        },
        {
          id: 3,
          username: "Maggie",
          password: bcrypt.hashSync("pass", 8),
          role_id: 3
        },
        {
          id: 4,
          username: "Avish",
          password: bcrypt.hashSync("pass", 8),
          role_id: 3
        }
      ]);
    });
};

// {
//   id: ,
// 	username : "",
// 	password: "pass",
// 	role_id :
// }

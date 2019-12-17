const db = require("../data/db-config.js");

module.exports = {
    find,
    findByFilter,
    add,
    findById
};

function find() {
  return db("users").select("id", "username");
}

function findByFilter(filter) {
  return db("users")
    .select("id", "username", "password")
    .where(filter);
}

function add(user) {
  return db("users")
    .insert(user)
    .then(ids => {
      const [id] = ids;
      return findById(id);
    });
}

function findById(id) {
  return db("users")
    .select("id", "username")
    .where({ id })
    .first();
}

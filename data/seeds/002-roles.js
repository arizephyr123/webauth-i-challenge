exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("roles")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("roles").insert([
        { id: 1, role: "student" },
        { id: 2, role: "teacher" },
        { id: 3, role: "admin" }
      ]);
    });
};

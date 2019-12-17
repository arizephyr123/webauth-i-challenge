const server = require("./api/server.js");

port = process.env.PORT || 4005;

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

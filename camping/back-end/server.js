const express = require("express");
const user = require("./routers/user");
const reservation = require("./routers/reservation");
const reclamation = require("./routers/reclamation");
const equipements = require("./routers/equipements");
const programs = require("./routers/programs");
const cors = require("cors");

var server = express();
var port = 5000;
server.use(express.json());
server.use(cors("*"));
require("./db/connection");
server.use(user);
server.use(reservation);
server.use(reclamation);
server.use(equipements);
server.use(programs);
server.listen(port, () => {
  console.log(`server is running on : ${port}`);
});

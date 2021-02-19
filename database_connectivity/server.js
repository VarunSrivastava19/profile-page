const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const cors = require('cors');
var corsOptions = {
  origin: 'http://localhost:3000',
}

app.use(cors());

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to food delivery application." });
});

const db = require("./app/models");
db.sequelize.sync();
require("./app/routes/user.route")(app);
require("./app/routes/restaurant.route")(app);


// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
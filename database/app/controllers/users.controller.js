const db = require('../models')
const Users = db.users
const Op = db.Sequelize.Op

// Create and Save a new Issue
exports.createUser = (req, res) => {
  // Validate request
 /* if (!req.body.user) {
    res.status(400).send({
      message: 'Issue can not be empty!',
    })
    return
  }*/

  // Create a Issue
  const user = {
    email: req.body.email,
    username: req.body.username,
    password: req.body.password,
    address:req.body.address,
  }

  // Save Issue in the database
  Users.create(user)
    .then((data) => {
      res.send(data)
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error occurred while creating the User.',
      })
    })
}

exports.findAllUsers = (req, res) => {
  Users.findAll()
    .then((data) => {
      res.send(data)
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error occurred while retrieving User.',
      })
    })
}

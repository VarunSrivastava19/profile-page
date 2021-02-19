module.exports = (app) => {
    const issue = require('../controllers/users.controller.js')
  
    var router = require('express').Router()
  
    // Create a new News
    router.post('/', issue.createUser)
  
    // Retrieve all Tutorials
    router.get('/', issue.findAllUsers)
  
    app.use('/api/users', router)
  }
  
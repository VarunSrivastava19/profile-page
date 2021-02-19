module.exports = (app) => {
    const restaurant = require('../controllers/restaurant.controller.js')
  
    var router = require('express').Router()
  
   
   
  
    // Retrieve all Tutorials
    router.get('/', restaurant.findAllRestaurants)
    router.get('/findDish/:id', restaurant.findDish)
  
    app.use('/api/restaurants', router)
  }
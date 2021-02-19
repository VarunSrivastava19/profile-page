const db = require('../models')
const Reastaurant = db.restaurant;
const Dish=db.dish;
const Op = db.Sequelize.Op


exports.findAllRestaurants = (req, res) => {
  Reastaurant.findAll()
    .then((data) => {
      res.send(data)
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error occurred while retrieving restaurant.',
      })
    })
}
exports.findDish = (req, res) => {
    let id = req.params.id
  
    Dish
      .findAll({ where: { restId: id } })
      .then((data) => {
        res.send(data)
      })
      .catch((err) => {
        console.log('Error while find news : ', err)
      })
  }

var express = require('express');
var router = express.Router();

const bodyParser = require('body-parser');
const cors = require('cors');
const userModel = require('../models/user');
const restaurantModel = require('../models/restaurant')

// Rating post operations
router.post('/rating', (req, res)=>{
    
});
router.get('/users', (req, res)=>{
    userModel.findAll()
        .then((users)=>{
            res.status(200).json(users);
        },(err)=>{
            res.status(500).send(err);
        });
});
/******copy to diff file  */
//GET USER BY ID
router.get('/users/:id',(req, res)=>{
    userModel.findAll({
        where:{
            id:req.params.id
        }
    })
        .then((users)=>{
            res.status(200).json(users);
        },(err)=>{
            if(err) throw err;
            res.status(500).send(err);
        });
});
//POST USER
router.post('/users/', (req,res)=>{
    const paramdata = req.body;
    console.log(paramdata);
    userModel.create(paramdata)
        .then((users)=>{
            res.status(201).json(users);
        }, (err)=>{
        
            res.status(500).send(err);
        });
});
//PUT USER BY ID
router.put('/users/:id',(req,res)=>{
    let data = {
        id:req.params.id,
        username:req.body.username,
        email:req.body.email,
        password:req.body.password,
        address:req.body.address,
        city:req.body.city,
        phone:req.body.phone
    };
    userModel.update(data, {
        where:{
            id:data.id
        }
    })
        .then((user)=>{
            res.status(201).json(user);
        },(err)=>{
            res.status(400).send(err);
        });
});
//DELETE USER BY ID
router.delete('/users/:id', (req,res)=>{
    let data = {
        id:req.params.id
    };
    userModel.destroy({
        where:{
            id:data.id
        }
    })
        .then((user)=>{
            res.status(410).json(user);
        },(err)=>{
            res.status(405).send(err);
        });
});

//GET RESTAURANTS
router.get('/restaurants', (req, res)=>{
    restaurantModel.findAll()
        .then((restaurants)=>{
            res.status(200).json(restaurants);
        },(err)=>{
            res.status(500).send(err);
        });
});

//GET RESTAURANTS BY ID
router.get('/restaurants/:id', (req, res)=>{
    restaurantModel.findAll({
        where:{
            id:req.params.id
        }
    })
        .then((restaurants)=>{
            res.status(200).json(restaurants);
        },(err)=>{
            if(err) throw err;
            res.status(500).send(err);
        });
});
//POST RESTAURANT
router.post('/restaurants', (req,res)=>{
    const paramdata = req.body;
    console.log(paramdata);
    restaurantModel.create(paramdata)
        .then((restaurants)=>{
            res.status(201).json(restaurants);
        }, (err)=>{
            if(err) throw err;
            res.status(500).send(err);
        });
});

module.exports = router;

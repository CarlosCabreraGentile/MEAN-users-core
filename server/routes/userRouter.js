'use strict';

var express = require('express');
var userRouter = express.Router();
var userCtrl = require('../controllers/userController');

//Routes

userRouter.route('') 
    .get(userCtrl.list)
    .post(userCtrl.create);

userRouter.route('/:userId')
    .get(userCtrl.getById)
    .put(userCtrl.updateById)
    .delete(userCtrl.deleteById);    

module.exports = userRouter;
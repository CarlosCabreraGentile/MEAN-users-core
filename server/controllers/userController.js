'use strict';

var mongoose = require('mongoose');
var User = require('./../models/userModel');

mongoose.set('useCreateIndex', true);

/**
 * List Users with simple data
 * @param {*} req 
 * @param {*} res 
 */
var list =  (req, res) => {

    User
        .find()
        .then((users) => {
            return res.status(200).json(users);
        })
        .catch((err) => {
            return res.status(500).json({ msg: 'Internal server error', err });
        })
}

/**
 * Create a User
 * @param {*} req 
 * @param {*} res 
 */
var create = (req, res) => {

    var newUser = new User(req.body);

    newUser.save()
        .then((user) => {
            return res.status(201).json(user);
        })
        .catch((err) => {
            return res.status(500).json(err);
        })

}

/**
 * Get User by ID
 * @param {*} req 
 * @param {*} res 
 */
var getById = (req, res) => {

    User
        .findById(req.params.userId)
        .then((user) => {
            return res.status(200).json(user);
        })
        .catch((err) => {
            console.log(err);
            return res.status(500).json(err);
        })
}

/**
 * Update User by ID
 * @param {*} req 
 * @param {*} res 
 */
var updateById = (req, res) => {
    
    User
        .findOneAndUpdate({ _id: req.params.userId }, req.body, { new: true, useFindAndModify: false })
        .then((user) => {
            return res.status(200).json(user);
        })
        .catch((err) => {
            return res.status(500).json(err);
        })

}

/**
 * Delete User by ID
 * @param {*} req 
 * @param {*} res 
 */
var deleteById = (req, res) => {

    User
        .findOneAndDelete({ _id: req.params.userId })
        .then((user) => {
            return res.status(200).json({msg: 'User successfully removed', user});
        })
        .catch((err) => {
            return res.status(500).json(err);
        })

}

module.exports = {
    list: list,
    create: create,
    getById: getById,
    updateById: updateById,
    deleteById: deleteById,
};
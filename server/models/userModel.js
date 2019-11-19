'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    position: {
        type: String,
        required: true
    },
    office: {
        type: String,
        required: true
    },
    salary: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true,
        lowercase: true
    },
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    }
});

/**
 * Return true if user has role
 * @param role
 */
// userSchema.methods.hasRole = function(role) {
//     return (this.roles && (this.roles.indexOf(role) >= 0));
// }

//Name saved in database
module.exports = mongoose.model('User', userSchema);
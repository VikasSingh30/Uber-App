const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


const userSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: [true, 'First name is required'],
        minlength: [3, 'First name must be at least 3 characters long']
    },
    lastname: {
        type: String,
        required: [true, 'Last name is required'],
        minlength: [3, 'Last name must be at least 3 characters long']
    },
    email: {
        type: String,
        unique: true,
        required: [true, 'Email is required']
        // minlength: [5, 'Email must be at least 5 characters long']
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
        // minlength: [6, 'Password must be at least 6 characters long']
        select : false
    },
    socketID: {
        type: String
    }
});

userSchema.methods.generateAuthToken = function(){
    const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET); 
    return token;  
}

userSchema.comparePassword = async function(enteredPassword, userPassword){
    return await bcrypt.compare(enteredPassword, userPassword);
}

userSchema.statics.hashPassword = async function(password){
    return await bcrypt.hash(password, 10);
}

const module = mongoose.model('user', userSchema);

module.exports = module;
const userModel = require('../models/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports.createUser = async ({
    firstname, lastname, email, password
}) => {
    if (!firstname || !email || !password) {
        throw new Error('Missing required fields');
    }
    const user = await userModel.create({
        fullname: {
            firstname,
            lastname
        },
        email,
        password
    });
    return user;
};

module.exports.hashPassword = async (password) => {
    return await bcrypt.hash(password, 10);
};

module.exports.generateToken = (user) => {
    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, { expiresIn: '24h' });
    return token;
};
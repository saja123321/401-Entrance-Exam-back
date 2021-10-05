const mongoose = require('mongoose')
const { favoriteModel } = require('./favorite.schema')
const userScema = mongoose.Schema({
    email: { Type: String },
    List: { Type: favoriteModel }
})
const userModel = new mongoose.Model('user', userScema)
module.exports = { userModel }
const mongoose = require('mongoose')
const favoriteScema = new mongoose.Schema({
    email: { Type: String },
    title: { Type: String },
    description: { Type: String },
    toUSD: { Type: String },
    image_url: { Type: String }
})
const favoriteModel = mongoose.model('favorite', favoriteScema)
module.exports = favoriteModel
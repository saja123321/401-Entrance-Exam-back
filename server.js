'use strict'
const express = require('express');

const cors = require('cors');
const { getAllWatches } = require('./Controller/watches.Controller')
const { addToFavorite, getFavorite, delFromFavorite, updateFavorite } = require('./Controller/favorite.controller')

const axios = require('axios');
const mongoose = require('mongoose')
require('dotenv').config();
const app = express();
const PORT = process.env.PORT
app.use(cors());

app.use(express.json());
const DB = process.env.DB
mongoose.connect(`mongodb+srv://saja1234:saja1234@cluster0.hmii2.mongodb.net/401EXAM?retryWrites=true&w=majority`,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
    console.log("Connected successfully");
});
app.get('/get-watches-list', getAllWatches)
app.get('/getFavorite', getFavorite);
app.post('/addToFavorite', addToFavorite);
app.delete('/delFromFavorite/:id', delFromFavorite);
app.put('/updateFavorite/:id', updateFavorite)

app.listen(PORT, () => console.log('app lesten to port : ' + PORT))
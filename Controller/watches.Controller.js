'use strict'
const axios = require('axios');

const getAllWatches = async (req, res) => {
    axios.get('https://watches-world.herokuapp.com/watches-list/').then(
        watchesRes => res.json(watchesRes.data)
    ).catch(
        err => res.send(err)
    )
}
module.exports = { getAllWatches }
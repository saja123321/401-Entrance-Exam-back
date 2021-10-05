'use strict'
const favoriteModel = require('../Model/favorite.schema')
/*
app.get('/getFavorite', getFavorite);
app.post('/addToFavorite', addToFavorite);
app.delete('/delFromFavorite', delFromFavorite);
app.put('/updateFavorite' , updateFavorite)
*/

const addToFavorite = async (req, res) => {
    const data = req.body
    const newFav = new favoriteModel(data)
    console.log(newFav);
    try {
        await newFav.save()
        res.send("done")
    } catch (err) {
        console.log(err);
        res.send(err)
    }

}
const getFavorite = async (req, res) => {
    favoriteModel.find({}).then(
        allFavorite => res.send(allFavorite)
    ).catch(
        err => res.send(err)
    )
}
const delFromFavorite = (req, res) => {
    const id = req.params.id
    favoriteModel.findByIdAndDelete(id).then(
        findFav => favoriteModel.find({}).then(
            allFavorite => res.send(allFavorite)
        )
    ).catch(
        err => res.send(err)
    )
}
const updateFavorite = (req, res) => {
    const id = req.params.id
    const reqBody = req.body
    favoriteModel.findByIdAndUpdate(
        id, reqBody, function (err, docs) {
            if (err) {
                console.log(err)
            }
            else {
                favoriteModel.find({}).then(
                    allFavorite => res.send(allFavorite)
                )
            }
        })
}
module.exports = { addToFavorite, getFavorite, delFromFavorite, updateFavorite }
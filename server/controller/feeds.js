

const mongoose = require('mongoose');

var express = require('express')
var router = express.Router()
const Feeds = require('../model/feeds');


router.get('/', function (req, res) {
    Feeds.find({}).then(data => res.json(data))
})

router.post('/post', (req, res) => {
    Feeds.create(req.body)
        .then(result => {
            res.json(result)
        })

})

router.put('/post/:id', (req, res) => {
    const id = req.params.id
    const body = req.body
    Feeds.updateOne({ _id: id }, { body: body.body })
        .then(data => {
            console.log(data)
            res.json(data)
        })
})

router.put('/post/like/:id', (req, res) => {
    const id = req.params.id
    Feeds.findOneAndUpdate({ _id: id }, { $inc: { likes: 1 } })
        .then(data => {
            res.status(200).json({ ok: true })
        })
})

router.delete('/post/:id', (req, res) => {
    const id = req.params.id
    console.log(id);
    Feeds.deleteOne({ _id: id })
        .then(data => {
            console.log(data);
            res.json(data)
        })
})

module.exports = router;



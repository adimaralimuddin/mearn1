

const mongoose = require('mongoose');

const FeedSchema = new mongoose.Schema({
    author: String,
    body: String,
    date: Date,
    comments: Array,
    likes: Number
})

const FeedModel = mongoose.model('feeds', FeedSchema)

module.exports = FeedModel;
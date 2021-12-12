

const mongoose = require('mongoose')

const SalesSchema = new mongoose.Schema({
    name: String,
    age: Number
})


const Sales = mongoose.model('sales', SalesSchema)

module.exports = Sales
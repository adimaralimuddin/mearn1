
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()
const db = 'test1'
const dbURL = 'mongodb+srv://adimar:adimar123@cluster0.69aqo.mongodb.net/' + db + '?retryWrites=true&w=majority'
const localdb = 'mongodb://localhost:27017/test1'
mongoose.connect('mongodb://localhost:27017/test1');
const feed = require('./controller/feeds')

app.use(cors())
app.use(express.json())

app.use('/feeds', feed)

app.listen(8080, console.log('listening server'))

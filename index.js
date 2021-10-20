const express = require('express')
const database = require('./database/db')

database.products.push('Iphone')
const app = express()

app.listen(3001,() => {
    console.log("Listening at port 3001")
})
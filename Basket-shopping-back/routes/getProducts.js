const express = require('express')
const dbService = require("../models")

const app = express()

app.get('/list',(req,res)=>{
    dbService.products.findAll().then((data)=>{
    res.json(data)
})
})

module.exports = app
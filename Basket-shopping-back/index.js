const express = require('express')
const cors = require('cors')
const router = require('./routes/getProducts')


const app = express()

app.listen(8080)
app.use(cors())
app.use(router)






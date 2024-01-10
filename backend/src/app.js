require('dotenv').config()
const express = require('express')
const app = express()
const errorHandler = require('./middlewares/errorHandler')
const notFound = require('./middlewares/notFound')

//route doesnot exists
app.use('*', notFound)

// express error handler
app.use(errorHandler)

app.listen(3000, console.log('server is listening at port', 3000))
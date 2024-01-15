//additonal packages 
require('dotenv').config()
require('express-async-errors')
const express = require('express')

//imported files and functions
const errorHandler = require('./middlewares/errorHandler')
const notFound = require('./middlewares/notFound')
const { customApiError } = require('./utils/customError')
const { connect } = require('./db/config')

//express 
const app = express()

app.get('/', (req,res)=>{
    res.send("yo")
})

//route doesnot exists
app.use('*', notFound)

// express error handler
app.use(errorHandler)

/*
    we are first connecting with the database
    then we are going forward. 
*/
const PORT = process.env.PORT || 3000
;(async function(){
    try {
        await connect()
        app.listen(PORT, console.log('server is listening at port', PORT))
    } catch (error) {
        console.log("unable to connect with the database")
        process.exit(1)
    }
})()
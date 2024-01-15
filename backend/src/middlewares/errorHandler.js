const {CustomError} = require('../utils/customError')

async function errorHandler(err, req, res, next){
    if(err instanceof CustomError){
        return res.status(err.statusCode).json({
            status: err.status,
            msg: err.message
        })
    }

    // console.log(err)
    return res.status(500).json({msg: "something went wrong"})
}

module.exports = errorHandler
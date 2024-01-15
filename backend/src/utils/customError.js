class CustomError extends Error{
    constructor(statusCode, message){
        super(message)
        this.status = 'fail'
        this.statusCode = statusCode
        this.message = message
    }
}

function customApiError(status, msg){
    return new CustomError(status, msg)
}

module.exports = {
    CustomError,
    customApiError
}
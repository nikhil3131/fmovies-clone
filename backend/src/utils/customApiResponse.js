class CustomApiResponse {
    constructor(statusCode, data, message = "Success") {
        this.statusCode = statusCode;
        this.message = message;
        this.data = data;
    }
}

function customApiResponse(statusCode, data, message) {
    return new CustomApiResponse(statusCode, data, message);
}

module.exports = { CustomApiResponse, customApiResponse };
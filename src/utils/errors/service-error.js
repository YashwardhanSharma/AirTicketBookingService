const {StatusCodes} = require('http-status-codes');

class ServiceError extends Error {
    constructor(
        message='Something went wrong',
        explanation='Service layer error',
        statusCode=500
        ){
            super();
         this.name='ServiceError';
         this.message=message;
         this.explanation=explanation;
         this.statusCode=statusCode;
    }
}

module.exports=ServiceError;
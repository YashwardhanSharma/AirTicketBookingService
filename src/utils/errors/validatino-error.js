const {StatusCodes} = require('http-status-codes');

class ValidationError extends Error{
    constructor(
    error
    ){
        super();
        let explanation = [];
        error.error.array.forEach((err) => {
            explanation.push(err.message);
        });
        this.name='ValidationError';
       this.message='Not able to alidate the data';
       this.explanation=explanation;
       this.statusCode=StatusCodes.BAD_REQUEST
    }
}
module.exports=ValidationError;
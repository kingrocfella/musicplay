const Joi = require('joi');

module.exports = {
    register(req,res,next){
        const schema = {
            email: Joi.string().email(),
            password: Joi.string().regex(new RegExp('^[a-zA-Z0-9]{8,32}$'))
        }

        const {error,value} = Joi.validate(req.body,schema)

        if (error) {
            switch (error.details[0].context.key) {
               case 'email':
                   res.status(400).send({
                       error: "You must enter a valid email address"
                   })
                   break;
                case 'password': 
                   res.status(400).send({
                       error: "Please ensure your password contains alphanumeric parameters and is at least 8 characters and less than 32 characters in length"
                   })
               default:
                   res.status(400).send({
                       error: "You entered invalid parameters"
                   })
                   break;
            } 
        }
        else{
            next()
        }
    }
}
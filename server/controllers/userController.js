const apiError = require('../error/apiError');

class UserController {
    async registration(req, res) {

    }

    async login(req, res) {

    }

    async check(req, res, next) {
        const {id} = req.query;
        if(!id){
            return next(apiError.badRequest('Не задан ID'));
        }
        res.json(id);
    }
}

module.exports = new UserController;
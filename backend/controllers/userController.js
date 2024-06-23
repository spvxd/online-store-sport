const ApiError = require('../errors/error')

class UserController {
    async registration(req, res) {

    }

    async login(req, res) {

    }

    async authCheck(req, res, next) {
        const {id} = req.query
        if (!id) {
            return next(ApiError.badRequest('Не указан ID'))
        }
        res.json(id)

    }

}



module.exports = new UserController()
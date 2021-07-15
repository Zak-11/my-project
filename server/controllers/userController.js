const ApiError = require("../error/ApiError");

class UserController {
    async registration(reg, res) {

    }

    async login(reg, res) {

    }

    async check(reg, res, next) {
    const {id} = reg.query
        if (!id){
            return next(ApiError.badRequest('No id set.'))
        }
        res.json(id)
    }
}
module.exports = new UserController()

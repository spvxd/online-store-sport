const ApiError = require('../errors/error')
const {Type} = require("../models/models");

class TypeController {
    async create(req, res) {
        const {name} = req.body
        const type = await Type.create({name})
        return res.json({type})
    }

    async getAll(req, res) {
        const allTypes = await Type.findAll()
        return res.json(allTypes)
    }

}



module.exports = new TypeController()
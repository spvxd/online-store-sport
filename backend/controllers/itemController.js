const uuid = require('uuid')
const path = require('path')
const {Item} = require("../models/models");
const ApiError = require('../errors/error')

class ItemController {
    async getAllItems(req, res, next) {
        const allItems = await Item.findAll()
        return res.json(allItems)
    }

    async getOneItem(req, res, next) {
        try {
            const {id} = req.params
            console.log(id)
            const oneItem = await Item.findOne({where: {id: id}})
            return res.json(oneItem)
        } catch (e) {
            return next(ApiError.badRequest(e.message))
        }

    }

    async createNewItem(req, res, next) {
        try {
            let {name, price, brandId, typeId, info} = req.body
            const {img} = req.files
            let fileName = uuid.v4() + ".jpg"
            await img.mv(path.resolve(__dirname, '..', 'static', fileName))
            const device = await Item.create({name, price, brandId, typeId, img: fileName});
            return res.json(device)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

}

module.exports = new ItemController()
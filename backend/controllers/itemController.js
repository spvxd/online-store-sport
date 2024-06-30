const uuid = require('uuid')
const path = require('path')
const {Item} = require("../models/models");
const ApiError = require('../errors/error')

class ItemController {
    async getAllItems(req, res, next) {
        let {brandId, typeId, limit, page} = req.query
        page = page || 1;
        limit = limit || 10;
        let item;
        let offset = page * limit - limit;
        if (!brandId && !typeId) {
            item = await Item.findAll({limit, offset})
        }
        if (!brandId && typeId) {
            item = await Item.findAll({ where: {typeId}, limit, offset})
        }
        if (brandId && !typeId) {
            item = await Item.findAll({where: {brandId}})
        }
        if (brandId && typeId) {
            item = await Item.findAll({where: {brandId, typeId}})
        }

        return res.json(item)
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
            const item = await Item.create({name, price, brandId, typeId, img: fileName});
            return res.json(item)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

}

module.exports = new ItemController()
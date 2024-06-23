const {Router} = require('express')
const router = new Router()
const itemController = require('../controllers/itemController')
router.get('/', itemController.getAllItems)
router.get('/:id', itemController.getOneItem)
router.post('/', itemController.createNewItem)

module.exports = router
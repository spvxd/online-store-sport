const {Router} = require('express')
const router = new Router()

router.post('/', )
router.get('/', (req, res) => {
    res.send('Страница всех товаров')
})
router.get('/:id', (req, res) => {
    const {id} = req.params
    res.send('Страница отдельного товара'+  ' ' + id)
})

module.exports = router
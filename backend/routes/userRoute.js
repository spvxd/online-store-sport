const {Router} = require('express')
const router = new Router()

router.post('/registration')
router.post('/login')
router.get('/auth', (req, res) => {
    res.send('Auth route');
});

module.exports = router;

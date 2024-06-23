const {Router} = require('express')
const router = new Router()

const userRouter = require('./userRoute');
const itemRouter = require('./itemRoute');
const typeRouter = require('./typeRoute');
const brandRouter = require('./brandRoute');


router.use('/user', userRouter);
router.use('/item', itemRouter);
router.use('/type', typeRouter);
router.use('/brand', brandRouter);


module.exports = router;

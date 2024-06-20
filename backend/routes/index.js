const {Router} = require('express')
const router = new Router()

const userRouter = require('./userRoute');
const itemRouter = require('./itemRoute');


router.use('/user', userRouter);
router.use('/item', itemRouter);


module.exports = router;

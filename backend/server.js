const express = require('express')
const app = express()
require('dotenv').config()
const PORT = process.env.PORT
const sequelize = require('./config/db')
const models = require('./models/models')
const path = require('path')
const cors = require('cors')
const fileUpload = require('express-fileupload')
const router = require('./routes/index')
const errorHandler = require('./middleware/errorMiddleware')
app.use(cors())
app.use(express.json())
app.use(express.static(path.resolve(__dirname, 'static')))
app.use(fileUpload({}))
app.use('/api', router)

app.use(errorHandler)
const startApp = async () => {
    try {
        await sequelize.authenticate({logging: false})
        await sequelize.sync({logging: false})
        app.listen(PORT, () => {
            console.log(`Listening on http://localhost:${PORT}`)
        })
    } catch (err) {
        console.error(err)
    }

}

startApp()
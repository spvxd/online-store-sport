const express = require('express')
const app = express()
require('dotenv').config()
const PORT = process.env.PORT
const sequelize = require('./config/db')
const models  = require('./models/models')
const {logger} = require("sequelize/lib/utils/logger");

const startApp = async () => {
    try {
        app.get('/', (req, res) => {
            return res.json({Status: 'OK'})
        })
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
const express = require('express')
const app = express()
require('dotenv').config()
const PORT = process.env.PORT
const sequelize = require('./config/db')

const startApp = async () => {
    try {
        app.get('/', (req, res) => {
            return res.json({Status: 'OK'})
        })
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, () => {
            console.log(`Listening on http://localhost:${PORT}`)
        })
    } catch (err) {
        console.error(err)
    }

}

startApp()
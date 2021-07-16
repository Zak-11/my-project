require('dotenv').config();
const sequelize = require('./db')
const models = require('./models/models')
const express = require('express')
const router = require('./routes/index')
const cors = require('cors')
const errorHandling = require('../server/mideleWare/ErrorHandlingMiddleWare')



const PORT = process.env.PORT || 5000
const app = express()


app.use(cors())
app.use(express.json())
app.use('/api', router)

//
app.use(errorHandling)

const start = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
    } catch (e) {
        console.log(e)
    }
}


start()

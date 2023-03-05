
const express = require('express')
const rootRoute = express.Router()

const userRoute = require('./userRoute')
const restaurantRoute = require('./restaurantRoute')

rootRoute.use('/user', userRoute)

rootRoute.use('/restaurant', restaurantRoute)

module.exports = rootRoute
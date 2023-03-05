

const express = require('express')
const userRoute = express.Router()

const { createOrder} = require('../controllers/userController')

// thêm order
userRoute.post('/createOrder', createOrder)

module.exports = userRoute
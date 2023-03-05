

const express = require('express')
const userRoute = express.Router()

const { getUser, createOrder} = require('../controllers/userController')

userRoute.get('/getUser/:id', getUser)


userRoute.post('/createOrder', createOrder)

module.exports = userRoute
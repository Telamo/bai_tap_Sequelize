

const express = require('express')
const restaurantRoute = express.Router()
const { likeRes,unlikeRes,getLikeRes, rateRes, getRateUserRes} = require('../controllers/restaurantController')


// like nhà hàng
restaurantRoute.post('/likeRes', likeRes)

// restaurantRoute.delete('/unlikeRes/:user_id/:res_id', unlikeRes)
// unlike nhà hàng
restaurantRoute.delete('/unlikeRes', unlikeRes)

// lấy danh sách like theo nhà hàng và user
restaurantRoute.get('/getLikeRes', getLikeRes)

//thêm đánh giá nhà hàng
restaurantRoute.post('/rateRes', rateRes)

// láy danh sách đánh giá theo nhà hàng và user
restaurantRoute.get('/getRateUserRes', getRateUserRes)

module.exports = restaurantRoute
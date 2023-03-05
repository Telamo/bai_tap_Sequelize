

const { Sequelize, where } = require('sequelize')
const sequelize = require('../models/index')
const initModels = require('../models/init-models')

const model = initModels(sequelize)

const Op = Sequelize.Op



const getUser = async (req, res) => {
    let { id } = req.params

    let data = await model.user.findAll()
    res.send(data)
}

const createOrder = async (req, res) => {
    let { user_id, food_id, amount, arr_sub_id} = req.body

    try {
        const order = await model.order.create({user_id, food_id, amount , arr_sub_id})
        res.status(200).send(order)
    }
    catch (err) {
        console.log(err)
        res.status(500).send("lỗi BE")
    }
}


module.exports = {
    getUser,
    createOrder
}

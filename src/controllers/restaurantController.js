

const { Sequelize, where } = require('sequelize')
const sequelize = require('../models/index')
const initModels = require('../models/init-models')

const model = initModels(sequelize)

const Op = Sequelize.Op


const likeRes = async (req, res) => {
    let { user_id, res_id } = req.body
    let date_like = new Date()
    try {
        const like = await model.like_res.create({ user_id, res_id, date_like })
        res.status(200).send(like)
    }
    catch (err) {
        console.log(err)
        res.status(500).send("lỗi BE")
    }

}

const unlikeRes = async (req, res) => {
    // let {user_id, res_id} = req.params
    let { user_id, res_id } = req.body

    try {
        const like = await model.like_res.findOne({
            where: { user_id, res_id }
        })
        if (!like) {
            return res.status(404).send("Không tìm thấy thông tin like!")
        }
        await like.destroy()
        res.status(200).send("unlike thành công!")
    } catch (err) {
        console.log(err)
        res.status(500).send("lỗi BE")
    }
}

const getLikeRes = async (req, res) => {
    try {
        let data = await model.like_res.findAll({
            include: ["re", "user"]
        })
        res.status(200).send(data)
    }
    catch (err) {
        console.log(err)
        res.status(500).send("lỗi BE")
    }
}

const rateRes = async (req, res) => {
    let { user_id, res_id, amount } = req.body
    let date_rate = new Date()
    try {
        const rated = await model.rate_res.findOne({
            where: { user_id, res_id }
        })
        if (rated) {
            res.send("đã đánh giá")
        } else {
            const rate = await model.rate_res.create({ user_id, res_id, amount, date_rate })
            res.status(200).send(rate)
        }
    }
    catch (err) {
        console.log(err)
        res.status(500).send('lỗi BE')
    }
}

const getRateUserRes = async (req, res) => {
    try{
        let data = await model.rate_res.findAll({
            include: ["re", "user"]
        })
        res.status(200).send(data)
    }
    catch (err) {
        console.log(err)
        res.status(500).send('lỗi BE')
    }
}



module.exports = {
    likeRes,
    unlikeRes,
    getLikeRes,
    rateRes,
    getRateUserRes
}
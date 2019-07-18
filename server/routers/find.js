const express = require('express');
const Router = express.Router();
const {
    formatData
} = require('../utils');
const {
    mysql: query
} = require('../db');



/***************************根据type对商品进行查询****************************/
Router.route('/:type')

    // 获取单个商品
    .get((req, res) => {
        let {
            type
        } = req.params;


        query(`select * from baiyang where type='${type}'`).then(function (data) {
            res.send(formatData({
                data
            }))
        }, (err) => {
            res.send(formatData({
                data: err,
                code: 250
            }))
        })

    })

module.exports = Router;
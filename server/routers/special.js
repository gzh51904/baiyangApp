const express = require('express');
const Router = express.Router();
const {
    formatData
} = require('../utils');
const {
    mysql: query
} = require('../db');



/***************************根据type对商品进行查询****************************/
Router.route('/:branch')

    // 获取单个商品
    .get((req, res) => {
        let {
            branch
        } = req.params;

        // console.log(branch);
        query(`select * from baiyang where branch='${branch}' LIMIT 0,10`).then(function (data) {
            // console.log(data);
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
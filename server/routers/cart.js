/*********************************引入模块**********************************/
const express = require('express');
const Router = express.Router();
const {
    formatData
} = require('../utils');
const {
    mysql: query
} = require('../db');

/***************************功能方法*****************************/

/***************************查询购物车商品 get查询 post查询****************************/
Router.route('/')
    // 获取所有商品
    .get((req, res) => {
        query('select * from cart').then(function (data) {
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

    /*************************添加单条记录到cart表格*************************/
    .post((req, res) => {
        console.log(req.body);
        // return;
        //获取用户请求信息
        let {
            username,
            goods_id,
            num
        } = req.body;

        // 判断购物车记录表里面是否有用户名&&商品id相同，没有就添加记录，有就修改num
        query(`SELECT * from cart WHERE username = '${username}' and goods_id = ${goods_id}`).then(function (data) {
            //无
            if (data.length == 0) {
                let names = '';
                let values = '';
                for (let key in req.body) {
                    names += key + ',';
                    values += '"' + req.body[key] + '",'
                }
                // 去除多余逗号
                names = names.slice(0, -1)
                values = values.slice(0, -1)

                let sql = `insert into cart(${names}) values(${values})`;

                query(sql).then(data => {
                    res.send(formatData({
                        data
                    }))
                }).catch(err => {
                    res.send(formatData({
                        data: err,
                        code: 250
                    }))
                })
            } else { //有 
                let id = data[0].id;
                let new_num = data[0].num + num;

                let sql = `update cart set num = ${new_num} where id=${id}`;

                query(sql).then(data => {
                    res.send(formatData({
                        data
                    }))
                }).catch(err => {
                    res.send(formatData({
                        data: err,
                        code: 250
                    }))
                })
            }
        }, (err) => {
            res.send(formatData({
                data: err,
                code: 250
            }))
        })

    });

// .delete((req, res) => {

//     // res.send("删除222");
//     let {
//         username,
//         goods_id
//     } = req.params;
//     console.log(req.params.goods_id);
//     let sql = `delete from cart where username='${username}' and goods_id=${goods_id}`;
//     // console.log(sql);
//     console.log("删除222");

//     query(sql).then(data => {
//         res.send(formatData());
//     }).catch(err => {
//         res.send(formatData({
//             data: err,
//             code: 250
//         }))
//     })




// });


/***************************根据id对商品进行改 查 删****************************/

Router.route('/:condition')
    // 查
    .get((req, res) => {
        let {
            condition
        } = req.params;
        query(`select * from cart where username = '${condition}'`).then(function (data) {
            res.send(formatData({
                data
            }));
        }, (err) => {
            res.send(formatData({
                data: err,
                code: 250
            }))
        })
    })
    // 删除
    .delete((req, res) => {
        // console.log();
        let {
            condition
        } = req.params;

        // var arr = condition.split("&");


        let sql = `delete from cart where id=${condition}`;

        query(sql).then(data => {
            res.send(formatData());
        }).catch(err => {
            res.send(formatData({
                data: err,
                code: 250
            }))
        })
    })

    // 改
    .patch((req, res) => {
        let {
            condition
        } = req.params;
        var arr = condition.split("&");
        // console.log(arr);
        // console.log(arr);
        let sql = `update cart set num = ${arr[1]} where id=${arr[0]}`;
        console.log(sql);

        query(sql).then(data => {
            res.send(formatData({
                data
            }))
        }).catch(err => {
            res.send(formatData({
                data: err,
                code: 250
            }))
        })


    });









module.exports = Router;
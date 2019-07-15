const express = require('express');

const Router = express.Router();
const {formatData} = require('../utils');
const {mysql:query} = require('../db');
const token = require('../utils/token.js');
// console.log(555)
Router.route('/')
// 获取所有商品
.get((req,res)=>{
    // res.send('helloworld');
    // SELECT id,Title from mlzm_content WHERE Title LIKE '%美女%'
   
   
    let phone = req.query.phone;
    let pwd = req.query.pwd
   
    query(`select * from res where phone=${phone} and pwd=${pwd}`).then(function(data){
        // console.log(data);
        // data: promise对象改成resolve状态时传回的参数
        console.log('phone:',phone);
        console.log('pwd:',pwd);
        console.log(data.length)
        if(data.length>0){
            // 生成token
            let Athorization = token.create(pwd);
            let username = phone;
            console.log(username)
            // res.set('Athorization', Athorization);
            res.send(formatData({data:username}))
            console.log(formatData({data:username}))
            // res.send(formatData({data}))
        }else{
            res.send(formatData({code:250}))
        }
        
    },(err)=>{
        res.send(formatData({data:err,code:250}))
    })

})



module.exports = Router;
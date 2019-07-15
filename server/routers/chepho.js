const express = require('express');

const Router = express.Router();
const {formatData} = require('../utils');
const {mysql:query} = require('../db');
console.log(66)
Router.route('/')
// 查看用户名是否重复
.get((req,res)=>{
    // res.send('helloworld');
    // SELECT id,Title from mlzm_content WHERE Title LIKE '%美女%'
    // console.log('p:',req.query,req.body,req.params);
   
    let phone = req.query.phone;
    // let pwd = req.query.pwd
    console.log('phone:',phone);
    query(`select * from res where phone = ${phone}`).then(function(data){
        // console.log(data);
        // data: promise对象改成resolve状态时传回的参数
        console.log('phone:',phone);
        // console.log('pwd:',pwd);
        console.log(data.length)
        if(data.length>0){
            res.send(formatData({code:250}))
        }else{
            res.send(formatData({data}))
        }
        
    },(err)=>{
        res.send(formatData({data:err,code:250}))
    })

})
// 新用户
.post((req,res)=>{ 
    let phone = req.body.phone;   
    let pwd = req.body.pwd;   
    console.log(req.query,req.body,req.params)
    console.log('phone:',phone);
    query(`insert into res (phone,pwd) values ('${phone}','${pwd}')`).then(function(data){
        // console.log(data);
        // data: promise对象改成resolve状态时传回的参数
        console.log('phone:',phone);
            res.send('true')
        }
           
        
    ,(err)=>{
        res.send(formatData({data:err,code:250}))
    })

})



module.exports = Router;
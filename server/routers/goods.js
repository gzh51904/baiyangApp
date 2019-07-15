const express = require('express');

const Router = express.Router();
const {formatData} = require('../utils');
const {mysql:query} = require('../db');
// console.log(555)
Router.route('/')
// 获取所有商品
.get((req,res)=>{
    // res.send('helloworld');
    // SELECT id,Title from mlzm_content WHERE Title LIKE '%美女%'
    query('select * from baiyang').then(function(data){
        // console.log(data);
        // data: promise对象改成resolve状态时传回的参数
        res.send(formatData({data}))
    },(err)=>{
        res.send(formatData({data:err,code:250}))
    })

})



// 增加单个商品
.post((req,res)=>{
    console.log('params:',req.body);//{name,price,category,imgurl,...}

    let id = Date.now();

    let names = '',values = '';
    for(let key in req.body){
        names += key + ',';
        values += '"' + req.body[key] + '",'
    }

    // 去除多余逗号
    names = names.slice(0,-1)
    values = values.slice(0,-1)

    let sql = `insert into baiyang(${names}) values(${values})`;

    query(sql).then(data=>{
        res.send(formatData({data}))
    }).catch(err=>{
        res.send(formatData({
            data:err,
            code:250
        }))
    })

    
});



Router.route('/:id')

// 修改单个商品
// put
.patch((req,res)=>{
    // 请求体中的参数会被express格式化到req.body
    console.log('params:',req.params);
    console.log('body:',req.body);

    let {id} = req.params;
    
    let opt=''; // name="xxx", price="998"
    for(let key in req.body){
        opt += `${key}='${req.body[key]}',`
    }

    // 去除多余逗号
    opt = opt.slice(0,-1)


    let sql = `update baiyang set ${opt} where id=${id}`;

    query(sql).then(data=>{
        res.send(formatData({data}))
    }).catch(err=>{
        res.send(formatData({
            data:err,
            code:250
        }))
    })
    
})



// 获取单个商品
.get((req,res)=>{
    // 动态路由: 参数id会被express格式化到req.params
    
    let {id} = req.params;
    console.log('params:',req.params)


    // // 连接数据库
    // connection.connect();
    // // 查询数据库
    // connection.query(`select * from goods where id=${id}`, function (error, results, fields) {
    //     if (error) throw error;
    //    // 关闭连接,释放资源
    //     connection.end();
    //     console.log(results)
    //     res.send(formatData({data:results[0]}))
    // });


    // pool.query(`select * from goods where id=${id}`, function(error, data){
    //     res.send(formatData({data:data[0]}))
    // });


    query(`select * from baiyang where id=${id}`).then(function(data){
        // data: promise对象改成resolve状态时传回的参数
        res.send(formatData({data}))
    },(err)=>{
        res.send(formatData({data:err,code:250}))
    })

})

// 删除单个商品
.delete((req,res)=>{
    // 动态路由: 参数id会被express格式化到req.params
    let {id} = req.params;
    console.log('params:',req.params)


    let sql = `delete from baiyang where id=${id}`;

    query(sql).then(data=>{
        res.send(formatData());
    }).catch(err=>{
        res.send(formatData({data:err,code:250}))
    })
});

// 通过type查询
Router.route('/:type'+'t')
// 获取单个商品
.get((req,res)=>{
   console.log(6666)
    let {type} = req.params;
    console.log('params:',req.params)

    query(`select * from baiyang where type=${type}`).then(function(data){
        // data: promise对象改成resolve状态时传回的参数
        res.send(formatData({data}))
    },(err)=>{
        res.send(formatData({data:err,code:250}))
    })

})


Router.route('b'+'/:branch')
// 获取单个商品
.get((req,res)=>{
    
    let {branch} = req.params;
    console.log('params:',req.params)

    query(`select * from baiyang where branch=${branch}`).then(function(data){
        // data: promise对象改成resolve状态时传回的参数
        res.send(formatData({data}))
    },(err)=>{
        res.send(formatData({data:err,code:250}))
    })

})
module.exports = Router;
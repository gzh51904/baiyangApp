# 演示

###### 项目名称：百洋网

###### 官网：<https://m.baiyangwang.com/> 

###### 上线网址:

百洋网app: http://106.14.82.47:8080

后台管理系统：http://106.14.82.47:1904

##### github仓库地址:git@github.com:gzh51904/baiyangApp.git

##### 或https://github.com/gzh51904/baiyangApp.git

# 团队与分工

组长：张兼铭 

组员：雷皓钦   彭达文  甘丽云

负责模块说明：

张兼铭：发现页、设置页、订单页、数据库数据、github配置、项目上线 

雷皓钦：后台管理系统 、登录注册页功能 、登录注册页接口 

彭达文：搜索页、列表页、分类页

甘丽云：首页、详情页、购物车、我的 、登录注册页样式

​		路由配置、数据库数据、购物车接口、发现页接口 

### 项目目录说明

 |-- babel.config.js     
|-- baiyangApp        //master分支
|-- package-lock.json
|-- package.json
|-- public
|   |-- favicon.ico
|   `-- index.html
|-- readme.md     //项目说明
|-- server            /node写的服务说明
|   |-- config.json
|   |-- db              //连接数据库文件
|   |   |-- index.js
|   |   |-- mongo.js    //连接moogo
|   |   `-- mysql.js      //连接mysql
|   |-- package-lock.json
|   |-- package.json
|   |-- routers             //路由文件
|   |   |-- chepho.js
|   |   |-- goods.js
|   |   |-- index.js
|   |   |-- login.js
|   |   |-- reg.js
|   |   `-- upload.js
|   |-- server.js
|   |-- uploads
|   |   |-- avatar-1562572819413.jpg
|   |   |-- avatar-1562573056117.jpg
|   |   |-- avatar-1562573147415.jpg
|   |   |-- avatar-1562573223825.jpg
|   |   |-- avatar-1562573251668.jpg
|   |   |-- avatar-1562573272116.png
|   |   `-- f74f073d94b6609cd4a17e4090a36a96.jpg
|   `-- utils               //校验文件
|       |-- index.js
|       `-- token.js
`-- src
|-- App.vue          //父组件
|-- assets             //资源文件
|   |-- css
|   |-- iconfont
|   |-- img
|   |-- js
|   |-- logo.png
|   `-- pinpaiimg
|-- components       //子组件文件
|   |-- Foot.vue       //底部导航tab
|   |-- cart                //购物车子组件
|   |-- categroy         //分类页子组件
|   |-- detail             //详情页子组件
|   |-- find                //发现页子组件
|   |-- home             //主页子组件
|   |-- list                  //列表页子组件
|   |-- login              //登录页子组件
|   |-- member       //我的页子组件
|   `-- search
|-- eventVue.js
|-- main.js              //主要js代码
|-- package-lock.json
|-- router.js            //配置路由文件
|-- static               //静态资源文件
|   `-- img
|-- store.js           
|-- views               //子组件视图层文件
|   |-- Cart.vue
|   |-- Categroy.vue
|   |-- Detail.vue
|   |-- Find.vue
|   |-- Home.vue
|   |-- List.vue
|   |-- Login.vue
|   |-- LoginPwd.vue
|   |-- Member.vue
|   `-- Search.vue
`-- vuex                //Vuex文件
|-- actions.js
|-- getters.js
|-- index.js
|-- modules
`-- mutations.js








// 引入http模块
const http = require('http');
// 引入router模块
const getRouter = require('router');
// 获取路由对象
const router = getRouter();

// 呈递学生档案信息页面
router.get('/test',(req,res) => {
    res.end('test')
})

// 呈递学生档案信息列表页面
router.get('/index',(req,res) => {
    res.end('index')
})

// 数据库连接
require('./model/connect.js');
// 学生信息集合
const Student = require('./model/user.js')
// 创建网站服务器
const app = http.createServer();
// 当客户端访问服务器端的时候
app.on('request',(req,res) => {
    router(req, res, () => {
        console.log('1');
    })
})

app.listen(80);
console.log('服务器启动成功');
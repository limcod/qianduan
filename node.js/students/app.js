// 引入http模块
const http = require('http');
// 引入router模块
const getRouter = require('router');
// 引入模板引擎
const template = require('art-template');
// 引入path模块
const path = require('path');

// 引入静态资源访问模块
const serveStatic = require('serve-static');

// 获取路由对象
const router = getRouter();

// 实现静态资源访问服务
const serve = serveStatic(path.join(__dirname),'public')

// 配置模板的根目录
template.defaults.root = path.join(__dirname,'views'); 

// 呈递学生档案信息页面
router.get('/add',(req,res) => {
    let html = res.end('index.art', {})
    res.end(html);
})

// 呈递学生档案信息列表页面
router.get('/index',(req,res) => {
    let html = template('list.art',{})
    res.end(html)
})

// 数据库连接
require('./model/connect.js');
// 学生信息集合
const Student = require('./model/user.js')
// 创建网站服务器
const app = http.createServer();
// 当客户端访问服务器端的时候
app.on('request',(req,res) => {
    router(req, res, () => {})
    serve(req,res,() => {})
})

app.listen(80);
console.log('服务器启动成功');
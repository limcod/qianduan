// 引入router模块
const getRouter = require('router');
// 获取路由对象
const router = getRouter();
// 学生信息集合
const Student = require('../model/user.js');
// 引入模板引擎
const template = require('art-template');
// 引入querystring模块
const querystring = require('querystring');

// 呈递学生档案信息页面
router.get('/add',(req,res) => {
    let html = res.end('index.art', {})
    res.end(html);
})

// 呈递学生档案信息列表页面
router.get('/index', async (req,res) => {
    // 查询学生信息
    Students = await Student.find();
    console.log(Students);
    let html = template('list.art',{})
    res.end(html)
})

// 实现学生信息添加功能路由
router.post('/add',(rep,res) => {
    // 接受post请求参数
    let formDate = '';
    req.on('data',param =>{
        formDate += param;
    })
    req.on('end', async () => {
        await Student.create(querystring.parse(formDate));
        res.writeHead(301,{
            Location: '/list'
        });
        res.end();
        
    })
})
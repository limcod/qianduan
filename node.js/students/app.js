// 引入http模块
const http = require('http');
require('./model/connect.js');
const Student = require('./model/user.js')
// 创建网站服务器
const app = http.createServer();
// 当客户端访问服务器端的时候
app.on('request',(req,res) => {
    res.end('ok');
})

app.listen(80);
console.log('服务器启动成功');
const http = require('http');

// 创建服务器
const app = http.createServer();

// 为服务器对象添加请求事件
app.on('request',(req,res) => {
    res.end('ok')
})

// 监听端口
app.listen(3000);

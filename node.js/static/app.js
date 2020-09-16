const http = require('http');
const url = require('url');
const path = require('path');
const fs = require('fs');
const mime = require('mime');

const app = http.createServer();

app.on('request',(req,res) => {
    // 获取用户的请求路径
    let pathname = url.parse(req.url).pathname;

    if(pathname == '/'){
        pathname = '/default.html';
    }

    // 将用户的请求路径转换为实际的服务器硬盘路径
    let realPath = path.join(__dirname,'public' + pathname);

    let type = mime.getType(realPath);

    // 读取文件
    fs.readFile(realPath,(error,result) => {
        // 如果文件读取失败
        if(error != null){
            res.writeHead(404,{
                'content-type':'text/html;charset=utf8'
            })
            res.end('访问的页面不存在');
        }

        res.writeHead(200,{
            'content-type':type
        })
        res.end(result);
    })
});

app.listen(3000);
console.log('网站服务器启动成功');
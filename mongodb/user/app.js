const http = require('http');
const mongoose = require('mongoose');
const url = require('url');

// 数据库连接  27017是mongodb数据库的默认端口
mongoose.connect('mongodb://localhost:27017/playground', { userNewUrlParser: true })
    .then(() => console.log('数据库连接成功'))
    .catch(() => console.log('数据库连接失败'));

// 创建用户集合规则
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 20
    },
    age: {
        type: Number,
        min: 18,
        max: 80
    },
    password: String,
    email: String,
    hobbies: [ String ]
})

// 创建用户集合规则  返回集合构造函数
const User =  mongoose.model('User',userSchema);

// 创建服务器
const app = http.createServer();

// 为服务器对象添加请求事件
app.on('request', async (req, res) => {
    // 请求方式
    const methob = req.methob;
    // 请求地址
    const { pathname } = url.parse(req.url);

    if(methob == 'GET'){
        // 呈现用户列表页面
        if(pathname == '/list'){
            // 查询用户信息
            let users = await User.find();
            console.log(users);
            // html字符串
            let list = ``;
            res.end(list);
        }
    }else if(methob == 'POST'){

    }

    res.end('ok')
})

// 监听端口
app.listen(3000);

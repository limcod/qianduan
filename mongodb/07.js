// 引入mongoose第三方模块  用来操作数据库
const mongoose =require('mongoose');
// 数据库连接
mongoose.connect('mongodb://localhost/playground',{ useNewUrlParser: true })
    // 连接成功
    .then(() => console.log('数据库连接失败'))
    // 连接失败
    .catch(err => console.log(err,'数据库连接失败'));
const postSchema = new mongoose.Schema({
    title:{
        type: String,
        // 必选字段
        required: [true,'请传入文章标题'],
        // 字符串的最小长度
        minlength: [2,"文章长度不能小于2"],
        // 字符串的最大长度
        maxlength: [5,'文章长度最大不能超过5'],
        // 去除字符串两边的空格
        trim:true
    }
})

const Post = mongoose.model('Post',postSchema);

Post.create({title:'     aa       '}).then(result => console.log(result))
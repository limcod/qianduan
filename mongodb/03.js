const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/playground',{useNewUrlParser: true})
.then(() => {
    console.log('数据库连接成功');
    
})
.catch(err => {
    console.log(err,'数据库连接失败');
    
})

// 创建集合规则
const courseSchema = new mongoose.Schema({
    name: String,
    author: String,
    isPublished: Boolean
})

// 使用规则创建集合
// 1. 集合名称
// 2. 集合规则
const Course = mongoose.model('Course',courseSchema);   // courses

// 向集合中插入文档
// Course.create({name:'JavaScript',author: '黑马讲师', isPublished: false},(err,result) => {
//     // 错误对象
//     console.log(err);
//     // 当前插入的文档
//     console.log(result);
    
// })

Course.create({name:'JavaScript',author: '黑马讲师', isPublished: false})
    .then(result => {
        console.log(result);
        
    })
    .catch(err => {
        console.log(err);
        
    })
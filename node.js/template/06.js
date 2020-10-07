const template = require('art-template');
const path = require('path');

const views = path.join(__dirname, 'views','06.art');

const html = template(views, {
    
});

console.log(html);
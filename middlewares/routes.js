/*
* @Author: lizhonghui
* @Date:   2016-09-05 17:19:59
* @Last Modified by:   lizhonghui
* @Last Modified time: 2016-09-06 13:58:27
*/

const Router = require('koa-router');
const fs = require('fs');
const path = require('path');

module.exports = (controller) => {
  let files = fs.readdirSync(path.join(__dirname, '../', controller));
  let routers = [];
  files.forEach(file => {
    file = file.replace(/\.[a-z0-9_-]+$/i, '');
    let router = new Router({
      prefix: file === 'index' ? '' : '/' + file
    });
    try {
      require(`../${controller}/${file}`)(router);
      routers.push(router);
    } catch(e) {
      console.log(`路由(${file})初始化失败(${e.message})`);
    }
  });
  return routers;
};

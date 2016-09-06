/*
* @Author: lizhonghui
* @Date:   2016-09-06 13:36:08
* @Last Modified by:   lizhonghui
* @Last Modified time: 2016-09-06 13:47:55
*/

const _ = require("lodash");
const fs = require("fs");
const path = require('path');

let env, debug = false;;
switch(process.env.NODE_ENV) {
  case 'dev':
  case 'development':
    env = 'dev';
    debug = true;
    break;
  case 'test':
    env = 'test';
    break;
  case 'uat':
    env = 'uat';
    break;
  case 'prod':
  case 'production':
    env = 'prod';
    break;
  default:
    env = 'unknown';
    break;
}

const config = {

}

var envFilePath = path.join(__dirname, `env/${env}.js`);
if(fs.existsSync(envFilePath)) {
  try {
    var envConfig = require(envFilePath);
    if(envConfig) {
      _.extend(config, envConfig);
    }
  }
  catch(_) {
    console.log(`加载${env}配置文件失败`);
  }

}

module.exports = config;


'use strict';
const koa = require('koa');
const app = module.exports = koa();

// Logger
const log4js = require('log4js');
const logConfig = require('./config/log');
log4js.configure(logConfig);

// body parser
const bodyParser = require('koa-bodyparser');
app.use(bodyParser());

// helmet
const helmet = require('koa-helmet');
app.use(helmet());

// routes
const routers = require('./middlewares/routes')('controllers');
routers.forEach(router => {
  app.use(router.routes());
});

// Compress
const compress = require('koa-compress');
app.use(compress());

if (!module.parent) {
  app.listen(3000);
  console.log('listening on port 3000');
}

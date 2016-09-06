/*
* @Author: lizhonghui
* @Date:   2016-09-05 17:20:29
* @Last Modified by:   lizhonghui
* @Last Modified time: 2016-09-06 15:13:14
*/

const logger = require('log4js').getLogger('http');

module.exports = router => {
  router.get('/', function *() {
    logger.debug('visit /');
    this.body = 'hello world';
  })
  router.get('/api', function *() {
    this.body = 'hello, abc';
  });
}

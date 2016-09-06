/*
* @Author: lizhonghui
* @Date:   2016-09-06 13:48:21
* @Last Modified by:   lizhonghui
* @Last Modified time: 2016-09-06 13:59:47
*/

module.exports = router => {
  router.get('/', function *() {
    this.body = 'api index';
  });
  router.get('/abc', function *() {
    this.body = 'api abc';
  });
}

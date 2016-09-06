/*
* @Author: lizhonghui
* @Date:   2016-09-06 14:16:20
* @Last Modified by:   lizhonghui
* @Last Modified time: 2016-09-06 15:17:44
*/

module.exports = {
  appenders: [
    {
      type: "console",
      category: ["console"]
    },
    {
      type: "dateFile",
      filename: 'logs/http.log',
      pattern: "-dd", // log文件保存一个月
      category: "http"
    }
  ]
}

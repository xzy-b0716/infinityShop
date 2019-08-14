/*
 * @Description: 
 * @Version: 2.0
 * @Autor: Seven
 * @Date: 2019-08-13 16:58:22
 * @LastEditors: Seven
 * @LastEditTime: 2019-08-13 17:00:05
 */
export function formatDate (secs) {
  var t = new Date(secs)
  var year = t.getFullYear()
  var month = t.getMonth() + 1
  if (month < 10) { month = '0' + month }
  var date = t.getDate()
  if (date < 10) { date = '0' + date }
  var hour = t.getHours()
  if (hour < 10) { hour = '0' + hour }
  var minute = t.getMinutes()
  if (minute < 10) { minute = '0' + minute }
  var second = t.getSeconds()
  if (second < 10) { second = '0' + second }
  return year + '-' + month + '-' + date
}
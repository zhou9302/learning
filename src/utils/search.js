// 模糊查询
function search (list, text) {
  let arr = []
  for (var key in list) {
    let reg = new RegExp(text, 'g')
    if (reg.exec(list[key]) != null) {
      arr.push(list[key])
    // break
    }
  }
}
// 过滤json中不需要的字段
function filtration (originObj, ...rest) {
  let obj = {}
  for (let val of rest) {
    obj[val] = originObj[val]
  }
  return obj
}
export {
  search,
  filtration
}

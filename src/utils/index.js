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

// 深拷贝 https://segmentfault.com/a/1190000008637489
function deepClone (source) {
  if (!source || typeof source !== 'object') {
    throw new Error('error arguments', 'shallowClone')
  }
  var targetObj = source.constructor === Array ? [] : {}
  for (var keys in source) {
    if (source.hasOwnProperty(keys)) {
      if (source[keys] && typeof source[keys] === 'object') {
        targetObj[keys] = source[keys].constructor === Array ? [] : {}
        targetObj[keys] = deepClone(source[keys])
      } else {
        targetObj[keys] = source[keys]
      }
    }
  }
  return targetObj
}

export {
  search,
  filtration,
  deepClone
}

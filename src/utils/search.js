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

export {
  search
}

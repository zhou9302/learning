class Point {
  constructor (x, y) {
    this.x = x
    this.y = y
  }
  // 数值位置互换
  changePostion () {
    [this.x, this.y] = [this.y, this.x]
  }
}
Object.assign(Point.prototype, {
  print () {
    console.log(this.x, this.y)
  }
})

export {
  Point
}

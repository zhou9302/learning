let counter = 3
function inCounter () {
  counter++
}
function C () {
  this.sum = 0
  this.add = function () {
    this.sum += 1
  }
  this.show = function () {
    console.log(this.sum)
  }
}
export {
  counter, inCounter, C
}

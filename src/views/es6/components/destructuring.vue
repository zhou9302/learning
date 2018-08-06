<template>
  <div>I AM Destructuring</div>
</template>
<script>
export default{
  data () {
    return {

    }
  },
  created () {
    // 数组解构赋值
    // this.demo1()

    // 默认值
    // this.demo2()

    // 对象解构赋值
    // this.demo3()

    // 函数参数的解构赋值
    // this.demo4()

  },
  methods: {
    // 解构赋值
    demo1 () {
      // 数组结构赋值
      let [a, b, c] = [1, 2, 3]
      console.log(a, b, c) // 1,2,3

      let [,, three] = [1, 2, 3]
      console.log(three) // 3

      let [one, ...other] = [1, 2, 3, 4, 5]
      console.log(one, other) // 1, [2,3,4,5]

      let [aa, bb, ...zz] = [1]
      console.log(aa, bb, zz) // 1,undefind []

      let [e, [f], g] = [1, [2, 3], 4]
      console.log(e, f, g) // 1,2,4

      try {
        let [foo] = 1 // 如果等号的右边不是数组（或者严格地说，不是可遍历的结构，参见《Iterator》一章），那么将会报错。
        console.log(foo)
      } catch (err) {
        console.log(err)
      }
    },
    // 默认值
    demo2 () {
      let [foo = true] = []
      console.log(foo) // true

      let [z = 1] = [undefined] // ES6 内部使用严格相等运算符（===），判断一个位置是否有值。所以，只有当一个数组成员严格等于undefined，默认值才会生效。
      console.log(z) // 1

      let [x, y = 'b'] = ['a']
      console.log(x, y) // a,b

      // 默认值是一个表达式
      let [cc = f(), dd = f()] = [1]
      function f () {
        return 'aa'
      }
      console.log(cc, dd) // 1,aa

      // 默认值可以引用解构赋值的其他变量，但该变量必须已经声明。
      let [xx = 1, yy = xx] = [] // x=1; y=1
      console.log(xx, yy)

      let {time = 12, id = 0} = {id: 2}
      console.log(time, id) // 12,2
    },
    // 对象解构赋值
    demo3 () {
      let {foo, bar} = {foo: 'aaa', bar: 'bbb'}
      console.log(foo, bar)// 'aaa','bbb'

      // 需要的变量名与属性名不一致,必须写成这样 (这实际上说明，对象的解构赋值是下面形式的简写)
      let obj = { first: 'hello', last: 'world' }
      let { first: f, last: l } = obj
      console.log(f) // 'hello'
      console.log(l) // 'world'

      const node = {
        loc: {
          start: {
            line: 1,
            column: 5
          }
        }
      }

      // 下面代码有三次解构赋值，分别是对loc、start、line三个属性的解构赋值。注意，最后一次对line属性的解构赋值之中，只有line是变量，loc和start都是模式，不是变量。
      let { loc, loc: { start }, loc: {start: { line }} } = node
      console.log(line) // 1
      console.log(loc) // Object {start: Object}
      console.log(start) // Object {line: 1, column: 5}

      // 如果解构失败，变量的值等于undefined。
      let {zhou} = {bar: 'baz'}
      console.log(zhou) // undefined

      // 将一个已经声明的变量用于解构赋值，必须非常小心,因为 JavaScript 引擎会将{x}理解成一个代码块，从而发生语法错误。只有不将大括号写在行首，避免 JavaScript 将其解释为代码块，才能解决这个问题。
      let ying;
      ({ying} = {ying: 1})
      console.log(ying)

      // 对象的解构赋值，可以很方便地将现有对象的方法，赋值到某个变量。下面代码将Math对象的对数、正弦、余弦三个方法，赋值到对应的变量上，使用起来就会方便很多。
      let { log, sin, cos } = Math
      console.log(log)
      console.log(sin)
      console.log(cos)

      // 由于数组本质是特殊的对象，因此可以对数组进行对象属性的解构。数组arr的0键对应的值是1，[arr.length - 1]就是2键，对应的值是3。
      let arr = [1, 2, 3]
      let {0: first, [arr.length - 1]: last} = arr
      console.log(first) // 1
      console.log(last) // 3
    },
    // 函数参数的解构赋值
    demo4 () {
      function add ([x, y]) {
        console.log(x + y)
        return x + y
      }

      add([1, 2]) // 3

      // 函数参数的解构也可以使用默认值。下面面代码中，函数add的参数表面上是一个数组，但在传入参数的那一刻，数组参数就被解构成变量x和y。对于函数内部的代码来说，它们能感受到的参数就是x和y。
      function move ({x = 0, y = 0} = {}) {
        console.log([x, y])
        return [x, y]
      }

      move({x: 3, y: 8}) // [3, 8]
      move({x: 3}) // [3, 0]
      move({}) // [0, 0]
      move() // [0, 0]

      // 下面代码是为函数move的参数指定默认值，而不是为变量x和y指定默认值，所以会得到与前一种写法不同的结果。
      function moveAgain ({x, y} = { x: 0, y: 0 }) {
        console.log([x, y])
        return [x, y]
      }

      moveAgain({x: 3, y: 8}) // [3, 8]
      moveAgain({x: 3}) // [3, undefined]
      moveAgain({}) // [undefined, undefined]
      moveAgain() // [0, 0]
    }

  }
}
</script>
<style lang="scss" >

</style>

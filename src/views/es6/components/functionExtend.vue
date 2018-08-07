<template>
  <div>I am function</div>
</template>
<script>
export default{
  data () {
    return {

    }
  },
  created () {
    // this.demo1()
    // this.demo2()
    // this.demo3()
    // this.demo4()
    this.demo5()
  },
  methods: {
    // 默认值与解构赋值
    demo1 () {
      // ES6 允许为函数的参数设置默认值，即直接写在参数定义的后面。
      function log (x, y = 'World') {
        console.log(x, y)
      }

      log('Hello') // Hello World
      log('Hello', 'China') // Hello China
      log('Hello', '') // Hello

      // 如果函数fetch的第二个参数是一个对象，就可以为它的三个属性设置默认值。这种写法不能省略第二个参数，如果结合函数参数的默认值，就可以省略第二个参数。这时，就出现了双重默认值。
      function fetch (url, { body = '', method = 'GET', headers = {} }) {
        console.log(method)
      }
      fetch('http://example.com', {}) // "GET"
      try {
        fetch('http://example.com') // 报错
      } catch (err) {
        console.log('出错了', err)
      }

      // 下面代码中，函数fetch没有第二个参数时，函数参数的默认值就会生效，然后才是解构赋值的默认值生效，变量method才会取到默认值GET。
      function fetchOne (url, { body = '', method = 'GET', headers = {} } = {}) {
        console.log(method)
      }
      fetchOne('http://example.com')

      // 下面两种写法都对函数的参数设定了默认值，区别是写法一函数参数的默认值是空对象，但是设置了对象解构赋值的默认值；写法二函数参数的默认值是一个有具体属性的对象，但是没有设置对象解构赋值的默认值。
      function m1 ({x = 0, y = 0} = {}) {
        console.log([x, y])
        return [x, y]
      }
      function m2 ({x, y} = { x: 0, y: 0 }) {
        console.log(x, y)
        return [x, y]
      }
      // 函数没有参数的情况
      m1() // [0, 0]
      m2() // [0, 0]

      // x 和 y 都有值的情况
      m1({x: 3, y: 8}) // [3, 8]
      m2({x: 3, y: 8}) // [3, 8]

      // x 有值，y 无值的情况
      m1({x: 3}) // [3, 0]
      m2({x: 3}) // [3, undefined]

      // x 和 y 都无值的情况
      m1({}) // [0, 0];
      m2({}) // [undefined, undefined]

      m1({z: 3}) // [0, 0]
      m2({z: 3}) // [undefined, undefined]
    },
    // length属性和应用
    demo2 () {
      // 通常情况下，定义了默认值的参数，应该是函数的尾参数。因为这样比较容易看出来，到底省略了哪些参数。如果非尾部的参数设置默认值，实际上这个参数是没法省略的。
      // 如果传入undefined，将触发该参数等于默认值，null则没有这个效果。
      function foo (x = 5, y = 6) {
        console.log(x, y)
      }
      foo(undefined, null)// 5 null

      // 函数的length属性,length属性的含义是，该函数预期传入的参数个数。某个参数指定默认值以后，预期传入的参数个数就不包括这个参数了。同理，后文的 rest 参数也不会计入length属性。
      function a (a) {} console.log(a.length) // 1
      function b (a = 5) {} console.log(b.length) // 0
      function c (a, b, c = 5) {} console.log(c.length) // 2

      // 应用
      function throwIfMissing () {
        throw new Error('Missing parameter')
      }

      function errorDemo (mustBeProvided = throwIfMissing()) {
        return mustBeProvided
      }
      try {
        errorDemo()
      } catch (err) {
        console.log('出错啦', err)
      }
    },
    // rest
    demo3 () {
      // rest 参数之后不能再有其他参数（即只能是最后一个参数），否则会报错。rest参数是一个真正的数组，可以使用数组方法，arguments只是一个类数组对象
      function restDemo (x, y, ...value) {
        console.log(x, y, value)
      }
      restDemo('zhou', 123, 23, 23, 23, 2, 32, 12) // zhou 123 [23, 23, 23, 2, 32, 12]

      // 严格模式 ES2016 做了一点修改，规定只要函数参数使用了默认值、解构赋值、或者扩展运算符，那么函数内部就不能显式设定为严格模式，否则会报错。这样规定的原因是，函数内部的严格模式，同时适用于函数体和函数参数。但是，函数执行的时候，先执行函数参数，然后再执行函数体。这样就有一个不合理的地方，只有从函数体之中，才能知道参数是否应该以严格模式执行，但是参数却应该先于函数体执行。
    },
    // 箭头函数
    demo4 () {
      // ES6 允许使用“箭头”（=>）定义函数。
      var f = v => v
      // 等同于
      var f = function (v) {
        return v
      }

      // 如果箭头函数不需要参数或需要多个参数，就使用一个圆括号代表参数部分。
      var z = () => {}

      // 如果箭头函数的代码块部分多于一条语句，就要使用大括号将它们括起来，并且使用return语句返回。
      var sum = (num1, num2) => {
        console.log(num1 + num2)
        return num1 + num2
      }

      // 使用注意点
      // 箭头函数有几个使用注意点。

      // （1）函数体内的this对象，就是定义时所在的对象，而不是使用时所在的对象。

      // （2）不可以当作构造函数，也就是说，不可以使用new命令，否则会抛出一个错误。

      // （3）不可以使用arguments对象，该对象在函数体内不存在。如果要用，可以用 rest 参数代替。

      // （4）不可以使用yield命令，因此箭头函数不能用作 Generator 函数。

      // 由于大括号被解释为代码块，所以如果箭头函数直接返回一个对象，必须在对象外面加上括号，否则会报错。
      let getTempItem = id => ({ id: id, name: 'Temp' })

      // 除了this，以下三个变量在箭头函数之中也是不存在的，指向外层函数的对应变量：arguments、super、new.target。
      // 由于箭头函数没有自己的this，所以当然也就不能用call()、apply()、bind()这些方法去改变this的指向。
      function foo () {
        setTimeout(() => {
          console.log('args:', arguments)
        }, 100)
      }

      foo(2, 4, 6, 8)// args: [2, 4, 6, 8]
    },
    // 尾调用优化/尾递归
    demo5 () {

    }
  }
}
</script>
<style lang="scss" >

</style>

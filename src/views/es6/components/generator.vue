<template>
  <div>I AM generator</div>
</template>
<script>
export default{
  data () {
    return {

    }
  },
  created () {
    // this.generator1()
    // this.generator2()
    this.generator3()
  },
  methods: {
    /**
     * Generator 函数有多种理解角度。语法上，首先可以把它理解成，Generator 函数是一个状态机，封装了多个内部状态。
     * 执行 Generator 函数会返回一个遍历器对象，也就是说，Generator 函数除了状态机，还是一个遍历器对象生成函数。返回的遍历器对象，可以依次遍历 Generator 函数内部的每一个状态。
     * 形式上，Generator 函数是一个普通函数，但是有两个特征。一是，function关键字与函数名之间有一个星号；二是，函数体内部使用yield表达式，定义不同的内部状态（yield在英语里的意思就是“产出”）。
     * 调用 Generator 函数，返回一个遍历器对象，代表 Generator 函数的内部指针。以后，每次调用遍历器对象的next方法，就会返回一个有着value和done两个属性的对象。value属性表示当前的内部状态的值，是yield表达式后面那个表达式的值；done属性是一个布尔值，表示是否遍历结束。
     */
    generator1 () {
      // 调用 Generator 函数后，该函数并不执行，返回的也不是函数运行结果，而是一个指向内部状态的指针对象
      let a = this.generator()
      console.log(a)
      // 下一步，必须调用遍历器对象的next方法，使得指针移向下一个状态。也就是说，每次调用next方法，内部指针就从函数头部或上一次停下来的地方开始执行，直到遇到下一个yield表达式（或return语句）为止。换言之，Generator 函数是分段执行的，yield表达式是暂停执行的标记，而next方法可以恢复执行。
      console.log(a.next())// { value: 'hello', done: false }
      console.log(a.next())// { value: 'world', done: false }
      console.log(a.next())// {value: "12", done: false}
      console.log(a.next())// { value: 'ending', done: true }
      console.log(a.next())// { value: undefind, done: true }
    },
    /** next方法的参数
     * yield表达式本身没有返回值，或者说总是返回undefined。next方法可以带一个参数，该参数就会被当作上一个yield表达式的返回值。
    */
    generator2 () {
      function* f () {
        for (var i = 0; true; i++) {
          var reset = yield i
          if (reset) { i = -1 }
        }
      }

      var g = f()
      // 注意，由于next方法的参数表示上一个yield表达式的返回值，所以在第一次使用next方法时，传递参数是无效的。V8 引擎直接忽略第一次使用next方法时的参数，只有从第二次使用next方法开始，参数才是有效的。从语义上讲，第一个next方法用来启动遍历器对象，所以不用带有参数。
      console.log(g.next()) // { value: 0, done: false }
      console.log(g.next()) // { value: 1, done: false }
      // 这个功能有很重要的语法意义。Generator 函数从暂停状态到恢复运行，它的上下文状态（context）是不变的。通过next方法的参数，就有办法在 Generator 函数开始运行之后，继续向函数体内部注入值。也就是说，可以在 Generator 函数运行的不同阶段，从外部向内部注入不同的值，从而调整函数行为。
      console.log(g.next(true)) // { value: 0, done: false }
    },
    generator3 () {
      function* foo () {
        yield 1
        yield 2
        yield 3
        yield 4
        yield 5
        return 6
      }
      console.log(foo())
      // for (let v of foo()) {
      //   console.log(v)
      // }
    },
    *generator () {
      yield 'hello'
      yield 'world'
      console.log('hello' + (yield '12')) // hello undefind
      return 'ending'
    }
  }
}
</script>
<style lang="scss" >

</style>

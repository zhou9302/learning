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
    // this.demo1()
    // this.demo2().then((parm) => {
    //   console.log(parm)
    // }).catch((err) => {
    //   console.log(err)
    // })
    // this.demo3().then((parm) => {
    //   console.log(parm)
    // })
    // this.demo4()
    this.demo5()
  },
  methods: {
    /** async函数就是将 Generator 函数的星号（*）替换成async，将yield替换成await，仅此而已。
     * async函数对 Generator 函数的改进，体现在以下四点。async函数完全可以看作多个异步操作，包装成的一个 Promise 对象，而await命令就是内部then命令的语法糖。
     *（1）内置执行器:Generator 函数的执行必须靠执行器，所以才有了co模块，而async函数自带执行器。也就是说，async函数的执行，与普通函数一模一样，只要一行。不需要调用next方法
     *（2）更好的语义:async和await，比起星号和yield，语义更清楚了。async表示函数里有异步操作，await表示紧跟在后面的表达式需要等待结果。
     *（3）更广的适用性:co模块约定，yield命令后面只能是 Thunk 函数或 Promise 对象，而async函数的await命令后面，可以是 Promise 对象和原始类型的值（数值、字符串和布尔值，但这时等同于同步操作）。
     *（4）返回值是 Promise:async函数的返回值是 Promise 对象，这比 Generator 函数的返回值是 Iterator 对象方便多了。你可以用then方法指定下一步的操作。
    */
    async demo1 () {
      let p1 = await this.promise()
      console.log(p1)
      let p2 = await this.promise()
      console.log(p2)
    },
    // async函数内部return语句返回的值，会成为then方法回调函数的参数。
    async demo2 () {
      // throw new Error('出错了')
      return 'demo2'
    },
    // await命令
    async demo3 () {
      // await命令后面是一个 Promise 对象。如果不是，会被转成一个立即resolve的 Promise 对象。await命令只能用在async函数之中，如果用在普通函数，就会报错。
      // await命令后面的 Promise 对象如果变为reject状态，则reject的参数会被catch方法的回调函数接收到。只要一个await语句后面的 Promise 变为reject，那么整个async函数都会中断执行。有时，我们希望即使前一个异步操作失败，也不要中断后面的异步操作。这时可以将第一个await放在try...catch结构里面，这样不管这个异步操作是否成功，第二个await都会执行。
      try {
        await Promise.reject(new Error('出错了'))
      } catch (e) {
        console.log(e)
      }
      let text = await Promise.resolve('hello world')
      return text
    },
    // 错误处理
    async demo4 () {
      try {
        await this.promise()
      } catch (err) {
        console.log(err)
      }
    },
    // 多个await命令后面的异步操作，如果不存在继发关系，最好让它们同时触发
    async demo5 () {
      let [foo, bar] = await Promise.all([this.promise(), this.promise1()])
      console.log(foo, bar)
    },
    promise () {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve('p1:success')
        }, 2000)
      })
    },
    promise1 () {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve('p2:success')
        }, 1000)
      })
    }
  }
}
</script>
<style lang="scss" >

</style>

<template>
  <div>I AM promise</div>
</template>
<script>
export default{
  data () {
    return {

    }
  },
  created () {
    // this.promise1()
    // this.promise2()
    // this.promise3()
    // this.promise4()
    // this.promise5()
    this.promise6()
  },
  methods: {
    // promise解决回调地狱
    promise1 () {
      // Promise构造函数接受一个函数作为参数，该函数的两个参数分别是resolve和reject。它们是两个函数，由 JavaScript 引擎提供，不用自己部署。resolve函数的作用是，将Promise对象的状态从“未完成”变为“成功”（即从 pending 变为 resolved），在异步操作成功时调用，并将异步操作的结果，作为参数传递出去；reject函数的作用是，将Promise对象的状态从“未完成”变为“失败”（即从 pending 变为 rejected），在异步操作失败时调用，并将异步操作报出的错误，作为参数传递出去。

      let param = null
      const promise1 = new Promise((resolve, reject) => {
        let a = 2
        setTimeout(() => {
          if (a > 1) {
            param = {name: 'ying'}
            console.log('p1', param)
            resolve()
          }
        }, 2000)
      })
      const promise2 = (resolve, reject) => {
        setTimeout(() => {
          resolve('p2:aa')
        }, 3000)
        console.log('p2', param)
      }
      promise1.then(() => {
        return new Promise(promise2)
      }, (error) => {
        console.log(error)
      }).then((val) => {
        console.log(val)
      }).catch((err) => {
        console.log(err)
      })
      /** 输出
       *  p1 {name: "ying"}
       *  p2 {name: "ying"}
       *  p2:aa
       */
    },
    promise2 () {
      // 下面代码中,p1是一个 Promise，3 秒之后变为rejected。p2的状态在 1 秒之后改变，resolve方法返回的是p1。由于p2返回的是另一个 Promise，导致p2自己的状态无效了，由p1的状态决定p2的状态。所以，后面的then语句都变成针对后者（p1）。又过了 2 秒，p1变为rejected，导致触发catch方法指定的回调函数。
      const p1 = new Promise(function (resolve, reject) {
        setTimeout(() => reject(new Error('fail')), 3000)
      })
      const p2 = new Promise(function (resolve, reject) {
        setTimeout(() => resolve(p1), 1000)
      })
      p2
        .then(result => console.log(result))
        .catch(error => console.log(error))
    },
    // Promise.prototype.then() 它的作用是为 Promise 实例添加状态改变时的回调函数。前面说过，then方法的第一个参数是resolved状态的回调函数，第二个参数（可选）是rejected状态的回调函数。then方法返回的是一个新的Promise实例（注意，不是原来那个Promise实例）。因此可以采用链式写法，即then方法后面再调用另一个then方法。

    // getJSON方法返回一个 Promise 对象，如果该对象状态变为resolved，则会调用then方法指定的回调函数；如果异步操作抛出错误，状态就会变为rejected，就会调用catch方法指定的回调函数，处理这个错误。另外，then方法指定的回调函数，如果运行中抛出错误，也会被catch方法捕获。

    // Promise 对象的错误具有“冒泡”性质，会一直向后传递，直到被捕获为止。也就是说，错误总是会被下一个catch语句捕获。一般来说，不要在then方法里面定义 Reject 状态的回调函数（即then的第二个参数），总是使用catch方法。因为catch方法可以捕获在成功的回调方法中的执行错误
    promise3 () {
      this.getJSON().then((val) => {
        console.log(val)
      }).catch((err) => {
        console.log(err)
      })
    },
    // finally方法用于指定不管 Promise 对象最后状态如何，都会执行的操作。finally方法的回调函数不接受任何参数，这意味着没有办法知道，前面的 Promise 状态到底是fulfilled还是rejected。这表明，finally方法里面的操作，应该是与状态无关的，不依赖于 Promise 的执行结果。
    // Promise.all方法用于将多个 Promise 实例，包装成一个新的 Promise 实例。
    promise4 () {
      const p1 = new Promise((resolve) => {
        setTimeout(() => {
          console.log('p1')
          resolve('success:p1')
        }, 1000)
      })
      const p2 = new Promise((resolve) => {
        setTimeout(() => {
          console.log('p2')
          resolve('success:p2')
        }, 500)
      })
      const p3 = new Promise((resolve) => {
        setTimeout(() => {
          console.log('p3')
          resolve('success:p3')
        }, 3000)
      })
      let all = Promise.all([p1, p2, p3])
      all.then(() => {
        console.log('bb')
      }).catch((err) => {
        console.log(err)
      })
      // 如果作为参数的 Promise 实例，自己定义了catch方法，那么它一旦被rejected，并不会触发Promise.all()的catch方法。
    },
    // Promise.race方法同样是将多个 Promise 实例，包装成一个新的 Promise 实例。只要promise实例中有一个成功，race的状态就变成成功。但是其他的仍然会继续执行,promise无法中断
    promise5 () {
      const p1 = new Promise((resolve) => {
        setTimeout(() => {
          console.log('p1')
          resolve('success:p1')
        }, 1000)
      })
      const p2 = new Promise((resolve) => {
        setTimeout(() => {
          console.log('p2')
          resolve('success:p2')
        }, 500)
      })
      const p3 = new Promise((resolve) => {
        setTimeout(() => {
          console.log('p3')
          resolve('success:p3')
        }, 3000)
      })
      let all = Promise.race([p1, p2, p3])
      all.then((res) => {
        console.log(res)
      }).catch((err) => {
        console.log(err)
      })

      // 如果指定时间内没有获得结果，就将 Promise 的状态变为reject，否则变为resolve。
      const p = Promise.race([
        fetch('/resource-that-may-take-a-while'),
        new Promise(function (resolve, reject) {
          setTimeout(() => reject(new Error('request timeout')), 5000)
        })
      ])

      p
        .then(console.log)
        .catch(console.error)
    },
    // 应用
    promise6 () {
      // 加载图片
      const preloadImage = function (path) {
        return new Promise(function (resolve, reject) {
          const image = new Image()
          image.onload = resolve
          image.onerror = reject
          image.src = path
        })
      }
      preloadImage().catch((err) => {
        console.log(err)
      })
    },
    getJSON () {
      let promise = new Promise((resolve, reject) => {
        let a = 1
        setTimeout(() => {
          if (a > 1) {
            reject(new Error('a超范围'))
          } else {
            resolve('success:data')
          }
        }, 1000)
      })
      return promise
    }
  }
}
</script>
<style lang="scss" >

</style>

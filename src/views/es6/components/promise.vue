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
    this.promise1()
  },
  methods: {
    promise1 () {
      let a = 3
      const promise = new Promise(function (resolve, reject) {
        if (a < 2) {
          resolve('aa')
        } else {
          reject(new Error('错误必须用error对象抛出'))
        }
      })
      promise.then((value) => {
        console.log(value)
      }, (error) => {
        console.log(error)
      })
    }
  }
}
</script>
<style lang="scss" >

</style>

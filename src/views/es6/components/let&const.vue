<template>
  <div>
    <button @click="forTest">for遍历</button>
    <button @click="repeat">重复声明</button>
  </div>
</template>
<script>
export default{
  data () {
    return {

    }
  },
  created () {

  },
  methods: {
    forTest () {
      /** *let声明 */
      let arr = []
      for (let i = 0; i < 10; i++) {
        arr[i] = function () {
          console.log('let声明:' + i)
        }
      }
      arr[3]()
      /** *var声明(会造成对{}外i的污染)) */
      let arr2 = []
      for (var i = 0; i < 10; i++) {
        arr2[i] = function () {
          console.log('var声明:' + i)
        }
      }
      arr2[3]()
    },
    repeat () {
      let a = '12'
      console.log(a)
      // let a = '13' 不能再同一个作用域空间重复声明
    }
  }
}
</script>
<style lang="scss">

</style>

<template>
  <div>I am number</div>
</template>
<script>
export default{
  data () {
    return {

    }
  },
  created () {
    this.demo1()
    // this.demo2()
    // this.demo3()
  },
  methods: {
    demo1 () {
      // Number.isFinite() 用来检查一个数值是否为有限的（finite），即不是Infinity。
      console.log(Number.isFinite(15)) // true
      console.log(Number.isFinite(isFinite)) // false
      console.log(Number.isFinite('foo')) // false
      console.log(Number.isFinite('15'))// false
      console.log(Number.isFinite(true))// false

      // Number.isNaN()用来检查一个值是否为NaN。
      console.log(Number.isNaN(NaN)) // true
      console.log(Number.isNaN(15)) // false
      console.log(Number.isNaN('15')) // false
      console.log(Number.isNaN(true)) // false
      console.log(Number.isNaN(9 / NaN)) // true
      console.log(Number.isNaN('true' / 0)) // true
      console.log(Number.isNaN('true' / 'true')) // true
      // 它们与传统的全局方法isFinite()和isNaN()的区别在于，传统方法先调用Number()将非数值的值转为数值，再进行判断，而这两个新方法只对数值有效，Number.isFinite()对于非数值一律返回false, Number.isNaN()只有对于NaN才返回true，非NaN一律返回false。

      // Number.isInteger() 用来判断一个数值是否为整数。
      Number.isInteger(25) // true
      Number.isInteger(25.1) // false
      Number.isInteger(25.0) // true
      Number.isInteger() // false
      Number.isInteger(null) // false
      Number.isInteger('15') // false
      Number.isInteger(true) // false
    }
  }
}
</script>
<style lang="scss" >

</style>

<template>
  <div>
    I AM Module
  </div>
</template>
<script>
import {counter, inCounter, C} from './import.js'
let commonJS = require('./CommonJS.js')
export default{
  data () {
    return {

    }
  },
  created () {
    this.demo1()
    this.demo2()
  },
  methods: {
    demo1 () {
      console.log(commonJS)
      commonJS.inCounter()
      console.log(commonJS.counter)

      console.log(counter)
      inCounter()
      console.log(counter)
    },
    demo2 () {
      let cc = new C()
      console.log(cc)
      cc.add()
      console.log(cc)
    }
  }
}
</script>
<style lang="scss">

</style>

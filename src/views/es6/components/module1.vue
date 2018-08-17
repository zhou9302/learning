<template>
  <div>
    I AM Module1
  </div>
</template>
<script>
import {counter, C} from './import.js'
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
      console.log(counter)
    },
    demo2 () {
      let cc = new C()
      console.log(cc)
    }
  }
}
</script>
<style lang="scss">

</style>

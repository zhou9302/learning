<template>
  <div>
    I AM Class
  </div>
</template>
<script>
import {Point} from '../utils.js'
export default{
  data () {
    return {
    }
  },
  created () {
    let p = new Point(3, 5)
    console.log(p)
    p.changePostion()
    console.log(p)
    p.print()
  },
  methods: {

  }
}
</script>
<style lang="scss">

</style>

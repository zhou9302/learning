<template>
  <div>
      13123
  </div>
</template>
<script>
import {getMonthAndName} from 'api/index'
export default{
  data () {
    return {

    }
  },
  created () {
    this.getDetail()
  },
  methods: {
    async getDetail () {
      try {
        let result = await getMonthAndName()
        console.log(result)
      } catch (error) {
        console.log('错误日志', error)
      }
    }
  }
}
</script>
<style lang="scss">

</style>

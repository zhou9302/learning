<template>
  <div>{{now}}</div>
</template>
<script>
export default{
  data () {
    return {
      now: ''
    }
  },
  created () {
    this.now = window.dayjs('2018-03').endOf('month').format('YYYY-MM-DD')
  }
}
</script>
<style scoped lang="scss">

</style>

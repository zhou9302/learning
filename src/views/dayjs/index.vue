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
    let str = ['我是你的眼', '我和你', '你是啊你', '问我']
    let text = '我'
    let arr = []
    // console.log(new RegExp(''))
    for (var key in str) {
      let reg = new RegExp(text, 'g')
      if (reg.exec(str[key]) != null) {
        arr.push(str[key])
      // break
      }
    }
    console.log(arr)
  }
}
</script>
<style scoped lang="scss">

</style>

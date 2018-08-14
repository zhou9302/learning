<template>
  <div class="echartLine">
    <div class="line" ref="echartsLine"></div>
    <div class="line" ref="echartsBar"></div>
    <button @click="download">保存</button>
    <button @click="setObj">改</button>
    {{getObj}}
  </div>
</template>
<script>
import echarts from 'components/echart/init.js'
import Opt from 'components/echart/line/option.js'
import Opt2 from 'components/echart/bar/option.js'
import {mapGetters} from 'vuex'
export default{
  data () {
    return {
      myChartBar: null,
      num: 0
    }
  },
  computed: {
    ...mapGetters(['getObj'])
  },
  mounted () {
    let option = new Opt()
    // console.log(option)
    var myChartLine = echarts.init(this.$refs.echartsLine)
    myChartLine.setOption(option)

    let optionBar = new Opt2()
    this.myChartBar = echarts.init(this.$refs.echartsBar)
    this.myChartBar.setOption(optionBar)
  },
  methods: {
    setObj () {
      this.$store.dispatch('SET_OBJ', {name: 'zhou'})
    },
    download () {
      setInterval(() => {
        if (this.num > 50) { return }
        var img = new Image()
        img.src = this.myChartBar.getDataURL({
          pixelRatio: 2,
          backgroundColor: '#fff'
        })
        console.log(img)
        var a = document.createElement('a')
        var event = new MouseEvent('click')

        a.download = '1' || '下载图片名称'
        a.href = img.src
        a.dispatchEvent(event)
        this.num++
      }, 0)
    }
  }
}
</script>
<style scoped lang="scss">
.echartLine{
  background: #000;
}
.line{
  width:800px;
  height:500px
}
</style>

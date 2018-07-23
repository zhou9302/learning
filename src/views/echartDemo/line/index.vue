<template>
  <div>
    <div class="line" ref="echartsLine"></div>
    <div class="line" ref="echartsBar"></div>
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
    var myChartBar = echarts.init(this.$refs.echartsBar)
    myChartBar.setOption(optionBar)

    // this.$nextTick(() => {
    //   console.log(this.echarts)
    //   this.echarts = echarts.init(this.$refs.echarts)
    //   this.echarts.setOption(this.option)

    //   this.echarts.dispatchAction({
    //     type: 'showTip',
    //     seriesIndex: 0,
    //     dataIndex: this.option.yAxis[0].data.length - 1
    //   })
    // })
  },
  methods: {
    setObj () {
      this.$store.dispatch('SET_OBJ', {name: 'zhou'})
    }
  }
}
</script>
<style>
.line{
  width:800px;
  height:500px
}
</style>

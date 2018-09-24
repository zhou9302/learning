<template>
  <div>
    <div class="graph" ref="echartsLine"></div>
    关联1：<input type="text">
    关联2：<input type="text">
    <button>查询</button>
  </div>
</template>
<script>
import axios from 'axios'
// import echarts from 'components/echart/init.js'
import Opt from 'components/echart/graph/option.js'
export default{
  data () {
    return {
      option: {}
    }
  },
  created () {
    axios.get('http://api.qixin.com/APIService/relation/findRelationJobResult?jobid=fd_rlt_res:89078870-c4c1-476e-b00b-ed96116963ca&appkey=ca019679eacb425f9a5fd6dba94b0356')
      .then((res) => {
        if (res.status === '200') {
          let data = res.data
          for (let o in data.nodes) {
            data.nodes[o].name = data.nodes[o].uid
          }
          for (let key in data.links) {
            data.links[key].target = data.links[key].target_id + ''
            data.links[key].source = data.links[key].source_id + ''
          }
          let option = new Opt()
          option.series[0].data = data.nodes
          option.series[0].links = data.links
          console.log(option)
          this.option = option
          console.log(option)
          this.draw()
        }
      })
  },
  methods: {
    draw () {
      // let option = new Opt()
      var myChartLine = window.echarts.init(this.$refs.echartsLine)
      myChartLine.setOption(this.option)
    }
  }
}
</script>
<style scoped lang="scss">
  .graph{
    width:800px;
    height:500px;
  }
</style>

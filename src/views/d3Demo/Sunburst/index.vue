<template>
  <div class="D3Sunburst">
    <svg>
      <defs>
        <filter id="f1" x="0" y="0" width="200%" height="100%">
          <feOffset result="offOut" in="SourceAlpha" dx="4" dy="1" />
          <feGaussianBlur result="blurOut" in="offOut" stdDeviation="1" />
          <feBlend in="SourceGraphic" in2="blurOut" mode="normal" /></filter>
      </defs>
    </svg>

    <div class="owenrshipChart">

    </div>
    <button @click="go" id="clickme">123</button>
  </div>
</template>
<script>
// import {flare} from './flare.js'
import data from './data.js'
import * as d3 from 'd3'
export default{
  data () {
    return {
      list: null
    }
  },
  created () {
    let treeArr = [data.data]
    console.log(treeArr)
    this.list = this.dataTransform(treeArr)[0]
    setTimeout(() => {
      this.renderTree()
    })
  },
  methods: {
    renderTree () {
      // 数据更新后d3重绘
      // d3.select('svg').remove()
      // 根据父元素宽高动态设置画布宽高
      let o = document.querySelector('.owenrshipChart')
      let h = o.offsetHeight * 1.1
      let w = o.offsetWidth * 0.6
      let width = w
      let height = h
      let radius = (Math.min(width, height) / 2) - 10
      let _this = this
      console.log(w)
      console.log(h)
      var x = d3.scale.linear()
        .range([0, 2 * Math.PI])

      var y = d3.scale.sqrt()
        .range([0, radius])

      var partition = d3.layout.partition()
        .value(function (d) { return d.size })

      var arc = d3.svg.arc()
        .startAngle(function (d) { return Math.max(0, Math.min(2 * Math.PI, x(d.x))) })
        .endAngle(function (d) { return Math.max(0, Math.min(2 * Math.PI, x(d.x + d.dx))) })
        .innerRadius(function (d) { return Math.max(0, y(d.y)) })
        .outerRadius(function (d) { return Math.max(0, y(d.y + d.dy)) })

      var svg = d3.select('.owenrshipChart').append('svg')
        .attr('width', width)
        .attr('height', height)
        .append('g')
        .attr('y', '20')
        .attr('transform', 'translate(' + width / 2 + ',' + (height / 2) + ')')
        .attr('filter', 'url(#f1)')
      var defs = svg.append('defs')

      var radialGradient = defs.append('radialGradient')
        .attr('id', 'radial')
        .attr('fx', '50%')
        .attr('fy', '50%')
        .attr('cx', '50%')
        .attr('cy', '50%')
        .attr('r', '70%')
        .attr('spreadMethod', 'pad')

      radialGradient.append('stop')
        .attr('offset', '0%')
        .style('stop-color', 'black')

      // var stop2 = radialGradient.append('stop')
      //   .attr('offset', '50%')
      //   .style('stop-color', 'red')

      radialGradient.append('stop')
        .attr('offset', '100%')
        .style('stop-color', '#2c435f')

      var linearGradient = defs.append('linearGradient')
        .attr('id', 'linearColor')
        .attr('x1', '0%')
        .attr('y1', '100%')
        .attr('x2', '0%')
        .attr('y2', '0%')

      linearGradient.append('stop')
        .attr('offset', '0%')
        .style('stop-color', '#0debff')

      linearGradient.append('stop')
        .attr('offset', '100%')
        .style('stop-color', '#4a91e8')

      // var filter = defs.append('filter')
      //   .attr('id', 'f1')
      //   .attr('x', '0')
      //   .attr('y', '0')
      //   .attr('width', '200%')
      //   .attr('height', '200%')

      // var offset = linearGradient.append('feOffset')
      //   .attr('result', 'offOut')
      //   .attr('in', 'SourceGraphic')
      //   .attr('dx', '20')
      //   .attr('dy', '20')

      // var blur = linearGradient.append('feBlend')
      //   .attr('result', 'blurOut')
      //   .attr('in', 'OffOut')
      //   .attr('stdDeviation', '10')

      // var end = linearGradient.append('feBlend')
      //   .attr('in', 'SourceGraphic%')
      //   .attr('in2', 'blurOut')
      //   .attr('mode', 'normal')

      svg.selectAll('path')
        .data(partition.nodes(this.list))
        .enter().append('path')
        .attr('d', arc)
        .style('fill', (d) => {
          return this.setColor(d)
        })
        .on('click', click)
        .on('mouseover', mouseover)
        .append('title')
        .text(function (d) { return d.name })

      d3.select('svg').on('mouseleave', mouseleave)

      var aa = svg.append('text')
        .attr('text-anchor', 'start')
        .attr('dy', '.2em')
        .attr('x', '-53')
        .style('fill', 'yellow')
        .text('广州无线电集团')

      // svg.selectAll('path').style('fill', 'red') // 使图表中心透明,显示底层的字

      function click (d) {
        aa.text('')
        // 解决点击事件与离开图表事件冲突
        _this.prevent = true
        setTimeout(() => {
          _this.prevent = false
        }, 450)
        // 如果用户是点击返回操作,则不为这次点击作记录
        // 如果用户搜索之后进行了点击,那么就清除搜索框显示的选中数据
        svg.transition()
          .duration(450)
          .tween('scale', function () {
            let xd = d3.interpolate(x.domain(), [d.x, d.x + d.dx])
            let yd = d3.interpolate(y.domain(), [d.y, 1])
            let yr = d3.interpolate(y.range(), [d.y ? 20 : 0, radius])
            return function (t) { x.domain(xd(t)); y.domain(yd(t)).range(yr(t)) }
          })
          .selectAll('path')
          .attrTween('d', function (d) { return function () { return arc(d) } })
      }
      function mouseover (d) {
        _this.showBox = true

        var sequenceArray = getAncestors(d)

        // Fade all the segments.
        d3.selectAll('path')
          .style('opacity', 0.4)

        // Then highlight only those that are an ancestor of the current segment.
        svg.selectAll('path')
          .filter(function (node) {
            return (sequenceArray.indexOf(node) >= 0)
          })
          .style('opacity', 1)
      }
      function mouseleave (d) {
        // 解决点击事件与离开图表事件冲突
        if (_this.prevent === true) {
          setTimeout(() => {
            mouseleave(d)
          }, 500)
          return
        }
        // Deactivate all segments during transition.
        d3.selectAll('path').on('mouseover', null)

        // Transition each segment to full opacity and then reactivate it.
        d3.selectAll('path')
          .transition()
          .duration(1000)
          .style('opacity', 1)
          .each('end', function () {
            d3.select(this).on('mouseover', mouseover)
          })
      }
      function getAncestors (node) {
        var path = []
        var current = node
        while (current.parent) {
          path.unshift(current)
          current = current.parent
        }
        return path
      }
      d3.select(self.frameElement).style('height', height + 'px')
    },
    // 递归处理数据方便图形组件及搜索框使用
    dataTransform (arr) {
      for (let o in arr) {
        if (!arr[o].children || arr[o].children.length === 0) {
          arr[o].size = '1' // size是d3中所占空间比例的标识
        } else {
          arr[o].children = this.dataTransform(arr[o].children)
        }
        arr[o].name = arr[o].fullname
      }
      return arr
    },
    setColor (d) {
      // console.log(d)
      // 根据不同层级显示不同颜色
      if (d.tree_level === '0') {
        console.log(document.getElementsByTagName('radialGradient'))
        return 'url(#radial)'
      } else if (d.nature === '控股') {
        switch (d.tree_level) {
          case '1':
            return 'url(#linearColor)'
          case '2':
            return '#37a6db'
          case '3':
            return '#2a69a3'
          case '4':
            return '#1f4271'
          case '5':
            return '#2c435f'
        }
      } else if (d.nature === '全资') {
        switch (d.tree_level) {
          case '1':
            return '#5ffa87'
          case '2':
            return '#4bd0a1 '
          case '3':
            return '#349b7a'
          case '4':
            return '#277560'
          case '5':
            return '#326159'
        }
      }
    },
    triggerClick (companyName) {
      let titleArr = document.body.getElementsByTagName('title')
      let node
      for (let o in titleArr) {
        if (titleArr[o].innerHTML === companyName) {
          node = titleArr[o].parentNode
        }
      }
      let e = document.createEvent('MouseEvents')
      e.initEvent('click', true, true)
      node.dispatchEvent(e)
    },
    go () {
      let svg = document.body.getElementsByTagName('title')
      // let SvgMainMapDoc = svg.getSVGDocument()
      let node = svg[0].parentNode
      // node.click()
      // node.click()
      // let titleArr = svg.querySelectorAll('title')
      let e = document.createEvent('MouseEvents')

      e.initEvent('click', true, true)

      node.dispatchEvent(e)

      this.$store.dispatch('SET_OBJ', {name: 'zhou'})
    }
  }
}
</script>
<style>
.owenrshipChart{
  width:600px;
  height:600px;
  margin:0 auto;
}
path {
  stroke: black;
  stroke-width:1;
}
/* path:hover{
  stroke:red;
  stroke-width:2;
} */
.D3Sunburst{
  background: #0d131f;
}
</style>

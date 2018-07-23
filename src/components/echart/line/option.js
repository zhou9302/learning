export default function () {
  return {
    color: '#37a6c2',
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        crossStyle: {
          color: '#999'
        }
      }
    },
    toolbox: {
      feature: {
        dataView: {show: true, readOnly: false},
        magicType: {show: true, type: ['line', 'bar']},
        restore: {show: true},
        saveAsImage: {show: true}
      }
    },
    legend: {
      date: [{
        name: '年龄(岁)',
        icon: require('@/assets/logo.png')
      },
      {
        name: '工龄(年)',
        icon: 'circle'
      },
      {
        name: '司龄(年)',
        icon: 'circle'
      }]
    },
    xAxis: [
      {
        type: 'category',
        data: ['1月', '2月', '3月', '4月', '5月', '6月'],
        axisPointer: {
          type: 'shadow'
        },
        axisLine: {
          show: true,
          lineStyle: {
            color: '#374978'
          }
        }
      }
    ],
    yAxis: [
      {
        type: 'value',
        name: '(岁)',
        min: 0,
        max: 40,
        interval: 10,
        axisLabel: {
          formatter: '{value}'
        },
        axisLine: {
          show: false,
          lineStyle: {
            color: '#374978'
          }
        },
        splitLine: {
          show: true,
          lineStyle: {
            color: '#2447a0'
          }
        }
      },
      {
        type: 'value',
        name: '(年)',
        min: 0,
        max: 20,
        interval: 5,
        axisLabel: {
          formatter: '{value}'
        },
        axisLine: {
          show: false,
          lineStyle: {
            color: '#374978'
          }
        },
        splitLine: {
          show: true,
          lineStyle: {
            color: '#2447a0'
          }
        }
      }
    ],
    series: [
      {
        name: '年龄',
        type: 'pictorialBar',
        barCategoryGap: '-100%',
        symbol: 'path://M0,10 L10,10 C5.5,10 5.5,5 5,0 C4.5,5 4.5,10 0,10 z',
        data: [20, 30, 35, 20, 26, 34],
        itemStyle: {
          normal: {
            opacity: 0.5
          },
          emphasis: {
            opacity: 1
          }
        }
      },
      {
        name: '工龄',
        type: 'line',
        data: [20, 12, 3, 17, 5, 8],
        smooth: true,
        lineStyle: {
          color: '#ff8b19'
        }
      },
      {
        name: '司龄',
        type: 'line',
        yAxisIndex: 1,
        data: [4, 6, 1, 2, 3, 10],
        smooth: true,
        lineStyle: {
          color: '#23e6ff'
        }
      }
    ]
  }
}

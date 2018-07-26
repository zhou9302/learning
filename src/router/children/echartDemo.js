const echartDemo = [{
  path: 'line',
  name: 'echartLine',
  component: resolve => require(['views/echartDemo/line/index.vue'], resolve)
}, {
  path: 'graph',
  name: 'echartGraph',
  component: resolve => require(['views/echartDemo/graph/index.vue'], resolve)
}]
export {
  echartDemo
}

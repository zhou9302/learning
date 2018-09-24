import Vue from 'vue'
import Router from 'vue-router'
import {es6Router} from './children/es6.js'
import {echartDemo} from './children/echartDemo.js'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: resolve => require(['components/HelloWorld'], resolve)
    },
    // d3图形demo
    {
      path: '/d3/sunburst',
      name: 'D3',
      component: resolve => require(['views/d3Demo/Sunburst'], resolve)
    },
    // echart图形demo
    {
      path: '/echartDemo',
      name: 'echartDemo',
      component: resolve => require(['views/echartDemo/index'], resolve),
      children: echartDemo
    },
    // 三栏布局
    {
      path: '/grail',
      name: 'grail',
      component: resolve => require(['views/layoutDemo/grail'], resolve)
    },
    // flex布局
    {
      path: '/flex',
      name: 'flex',
      component: resolve => require(['views/layoutDemo/flex'], resolve)
    },
    // 后台管理系统布局layout
    {
      path: '/layout',
      name: 'layout',
      component: resolve => require(['views/layoutDemo/layout'], resolve)
    },
    // 轮播demo
    {
      path: '/swiper',
      name: 'swiper',
      component: resolve => require(['views/swiperDemo/index'], resolve)
    },
    // 日期组件
    {
      path: '/dayjs',
      name: 'dayjs',
      component: resolve => require(['views/dayjs/index'], resolve)
    },
    // mockjs demo
    {
      path: '/mockJS',
      name: 'mockJS',
      component: resolve => require(['views/mockJSDemo/index'], resolve)
    },
    // ES6学习
    {
      path: '/es6',
      name: 'es6',
      component: resolve => require(['views/es6/index'], resolve),
      children: es6Router
    },
    {
      path: '/pdf',
      name: 'pdf',
      component: resolve => require(['views/drawPDF/index'], resolve)
    },
    {
      path: '*',
      name: '404',
      component: resolve => require(['views/404.vue'], resolve)
    }
  ]
})

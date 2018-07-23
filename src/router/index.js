import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import d3chart from 'views/d3Demo/Sunburst'
import echartline from 'views/echartDemo/line'
import grail from 'views/layoutDemo/grail'
import flex from 'views/layoutDemo/flex'
import layout from 'views/layoutDemo/layout'
import swiper from 'views/swiperDemo/index'
import dayjs from 'views/dayjs/index'
import mockJS from 'views/mockJSDemo/index'
import {es6Router} from './children/es6.js'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    // d3图形demo
    {
      path: '/d3/sunburst',
      name: 'D3',
      component: d3chart
    },
    // echart图形demo
    {
      path: '/echart/line',
      name: 'line',
      component: echartline
    },
    // 三栏布局
    {
      path: '/grail',
      name: 'grail',
      component: grail
    },
    // flex布局
    {
      path: '/flex',
      name: 'flex',
      component: flex
    },
    // 后台管理系统布局layout
    {
      path: '/layout',
      name: 'layout',
      component: layout
    },
    // 轮播demo
    {
      path: '/swiper',
      name: 'swiper',
      component: swiper
    },
    // 日期组件
    {
      path: '/dayjs',
      name: 'dayjs',
      component: dayjs
    },
    // mockjs demo
    {
      path: '/mockJS',
      name: 'mockJS',
      component: mockJS
    },
    // ES6学习
    {
      path: '/es6',
      name: 'es6',
      component: resolve => require(['views/es6/index'], resolve),
      children: es6Router
    }
  ]
})

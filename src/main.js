// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index'
import * as d3 from 'd3'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import dayjs from 'dayjs'
import htmlToPdf from 'utils/htmlToPdf.js'
import './styles/index.scss'
require('./mock/index')

Vue.use(htmlToPdf)
Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper)

window.dayjs = dayjs
window.d3 = d3
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  // 预渲染
  mounted () {
    document.dispatchEvent(new Event('render-event'))
  }

})

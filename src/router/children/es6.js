const es6Router = [
  {
    path: 'promise',
    name: 'promise',
    component: resolve => require(['views/es6/components/promise.vue'], resolve)
  }, {
    path: 'let',
    name: 'let',
    component: resolve => require(['views/es6/components/let&const.vue'], resolve)
  }, {
    path: 'destructuring',
    name: 'destructuring',
    component: resolve => require(['views/es6/components/destructuring.vue'], resolve)
  }, {
    path: 'stringExtend',
    name: 'stringExtend',
    component: resolve => require(['views/es6/components/stringExtend.vue'], resolve)
  }, {
    path: 'numberExtend',
    name: 'numberExtend',
    component: resolve => require(['views/es6/components/numberExtend.vue'], resolve)
  }, {
    path: 'functionExtend',
    name: 'functionExtend',
    component: resolve => require(['views/es6/components/functionExtend.vue'], resolve)
  }, {
    path: 'arrayExtend',
    name: 'arrayExtend',
    component: resolve => require(['views/es6/components/arrayExtend.vue'], resolve)
  }
]
export {
  es6Router
}

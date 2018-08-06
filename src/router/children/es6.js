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
  }
]
export {
  es6Router
}

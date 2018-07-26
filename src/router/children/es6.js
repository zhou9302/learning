const es6Router = [{
  path: 'promise',
  name: 'promise',
  component: resolve => require(['views/es6/components/promise.vue'], resolve)
}, {
  path: 'let',
  name: 'let',
  component: resolve => require(['views/es6/components/let&const.vue'], resolve)
}]
export {
  es6Router
}

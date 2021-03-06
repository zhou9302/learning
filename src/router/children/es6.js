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
  }, {
    path: 'objectExtend',
    name: 'objectExtend',
    component: resolve => require(['views/es6/components/objectExtend.vue'], resolve)
  }, {
    path: 'SetAndMap',
    name: 'SetAndMap',
    component: resolve => require(['views/es6/components/Set&Map.vue'], resolve)
  }, {
    path: 'IteratorAndforOf',
    name: 'IteratorAndforOf',
    component: resolve => require(['views/es6/components/IteratorAndforOf.vue'], resolve)
  }, {
    path: 'generator',
    name: 'generator',
    component: resolve => require(['views/es6/components/generator.vue'], resolve)
  }, {
    path: 'async',
    name: 'async',
    component: resolve => require(['views/es6/components/async.vue'], resolve)
  }, {
    path: 'module',
    name: 'module',
    component: resolve => require(['views/es6/components/module.vue'], resolve)
  }, {
    path: 'module1',
    name: 'module1',
    component: resolve => require(['views/es6/components/module1.vue'], resolve)
  }, {
    path: 'class',
    name: 'class',
    component: resolve => require(['views/es6/components/class.vue'], resolve)
  },
  {
    path: 'traversal',
    name: 'traversal',
    component: resolve => require(['views/es6/components/traversal.vue'], resolve)
  }
]
export {
  es6Router
}

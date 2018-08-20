<template>
  <div>
    I am objectExtend
  </div>
</template>
<script>
export default{
  data () {
    return {

    }
  },
  created () {
    // this.demo1()
    // this.demo2()
    // this.demo3()
    // this.demo4()
    // this.demo5()
    this.demo6()
  },
  methods: {
    // ES6 允许直接写入变量和函数，作为对象的属性和方法。
    demo1 () {
      let baz = '123'
      const obj = {
        baz
      }
      console.log(obj)// {baz:'123}

      // 这种写法用于函数的返回值，将会非常方便。
      function getPoint () {
        const x = 1
        const y = 10
        return {x, y}
      }

      console.log(getPoint())// {x:1, y:10}
    },
    // 属性名表达式
    demo2 () {
      let lastWord = 'last word'

      const a = {
        'first word': 'hello',
        [lastWord]: 'world'
      }

      console.log(a['first word']) // "hello"
      console.log(a[lastWord]) // "world"
      console.log(a['last word'])// "world"

      let propKey = 'foo'
      let obj = {
        [propKey]: true,
        ['a' + 'bc']: 123
      }
      console.log(obj['foo'])// true

      // 表达式还可以用于定义方法名。
      let obj1 = {
        ['h' + 'ello'] () {
          return 'hi'
        }
      }
      console.log(obj1.hello()) // hi

      // 注意，属性名表达式如果是一个对象，默认情况下会自动将对象转为字符串[object Object]，这一点要特别小心。
      const keyA = {a: 1}
      const keyB = {b: 2}

      const myObject = {
        [keyA]: 'valueA',
        [keyB]: 'valueB'
      }

      console.log(myObject) // Object {[object Object]: "valueB"}
    },
    // Object.is()
    demo3 () {
      // 相等运算符（==）和严格相等运算符（===）。它们都有缺点，前者会自动转换数据类型，后者的NaN不等于自身，以及+0等于-0。JavaScript 缺乏一种运算，在所有环境中，只要两个值是一样的，它们就应该相等。
      // Object.is就是部署这个算法的新方法。它用来比较两个值是否严格相等，与严格比较运算符（===）的行为基本一致。不同之处只有两个：一是+0不等于-0，二是NaN等于自身。
      let a = +0
      let b = -0
      let c = NaN
      let d = NaN

      Object.is('foo', 'foo')// true
      Object.is({}, {}) // false

      console.log(a === b) // true
      console.log(Object.is(a, b))// false
      console.log(c === d) // false
      console.log(Object.is(c, d)) // true
    },
    // Object.assign()
    demo4 () {
      /** Object.assign方法的第一个参数是目标对象，后面的参数都是源对象。
       * 如果只有一个参数，Object.assign会直接返回该参数。
       * 如果该参数不是对象，则会先转成对象，然后返回。
       * 由于undefined和null无法转成对象，所以如果它们作为参数，就会报错
       * 如果非对象参数出现在源对象的位置（即非首参数），那么处理规则有所不同。首先，这些参数都会转成对象，如果无法转成对象，就会跳过。这意味着，如果undefined和null不在首参数，就不会报错。
       * 其他类型的值（即数值、字符串和布尔值）不在首参数，也不会报错。但是，除了字符串会以数组形式，拷贝入目标对象，其他值都不会产生效果。这是因为只有字符串的包装对象，会产生可枚举属性。
       * Object.assign拷贝的属性是有限制的，只拷贝源对象的自身属性（不拷贝继承属性），也不拷贝不可枚举的属性（enumerable: false）
       */
      const target = {a: 1}
      const source1 = {b: 2}
      const source2 = {b: 3, c: 23}
      Object.assign(target, source1, source2)
      console.log(target)

      // 字符串会以数组形式，拷贝入目标对象
      const v1 = 'abc'
      const v2 = true
      const v3 = 10
      const obj = Object.assign({}, v1, v2, v3)
      console.log(obj) // { "0": "a", "1": "b", "2": "c" }

      /** 注意点
       *（1）浅拷贝：Object.assign方法实行的是浅拷贝，而不是深拷贝。也就是说，如果源对象某个属性的值是对象，那么目标对象拷贝得到的是这个对象的引用。
       *（2）同名属性的替换:对于这种嵌套的对象，一旦遇到同名属性，Object.assign的处理方法是替换，而不是添加。
       *（3）数组的处理：Object.assign可以用来处理数组，但是会把数组视为对象。会根据索引，替换两个数组中相同索引的值
       *（4）取值函数的处理:Object.assign只能进行值的复制，如果要复制的值是一个取值函数，那么将求值后再复制。
       */
      const obj1 = {a: {b: 1}}
      const obj2 = Object.assign({}, obj1)

      obj1.a.b = 2
      console.log(obj2.a.b) // 2

      // 下面代码中，source对象的foo属性是一个取值函数，Object.assign不会复制这个取值函数，只会拿到值以后，将这个值复制过去。
      const source = {
        get foo () { return 1 }
      }
      const target1 = {}
      console.log(Object.assign(target1, source))// { foo: 1 }

      /** 常见用途
       *（1）为对象添加属性
       *（2）为对象添加方法
       *（3）克隆对象
       *（4）合并多个对象
       */

      // （1）为对象添加属性
      class Point {
        constructor (x, y) {
          Object.assign(this, {x, y})
        }
      }
      console.log(new Point(1, 2))

      // （2）为对象添加方法
      Object.assign(Point.prototype, {
        someMethod (arg1, arg2) {
          console.log(this.x)
        },
        anotherMethod () {
          console.log(this.y)
        }
      })
      const p1 = new Point('zhou', 'ying')
      p1.someMethod() // zhou
      p1.anotherMethod() // ying

      // （3）克隆对象
      function clone (origin) {
        return Object.assign({}, origin)
      }
      // 浅拷贝
      let d1 = {a: 1, b: {a: 1}}
      let d2 = clone(d1)
      console.log(d2 === d1)
      d1.b.a = 2
      console.log(d2)
      // 采用这种方法克隆，只能克隆原始对象自身的值，不能克隆它继承的值。如果想要保持继承链，可以采用下面的代码。
      function clone2 (origin) {
        let originProto = Object.getPrototypeOf(origin)
        return Object.assign(Object.create(originProto), origin)
      }
      clone2(d1)

      // （4）合并多个对象
      let targetDemo = {new: 'xixi'}
      const merge = (targetDemo, ...sources) => Object.assign(targetDemo, ...sources)
      merge(targetDemo, d1, p1, d2)
      console.log(targetDemo)
      // 如果希望合并后返回一个新对象，可以改写上面函数，对一个空对象合并。
      const merge1 = (...sources) => Object.assign({}, ...sources)
      let newObj = merge1(targetDemo, d1, p1, d2)
      console.log(newObj)
    },
    // 属性的可枚举性和遍历  （未解决）***********************************************************
    demo5 () {
      class Animal {
        constructor (x, y) {
          this.x = x
          this.y = y
        }
        sayName () {
          console.log(this.x)
        }
      }
      class Cats extends Animal {
        constructor (x, y, color) {
          super(x, y) // 调用父类的constructor(x, y)
          this.color = color
        }
      }
      let animal = new Animal('zhou', 'ying')
      let cat = new Cats('zhou', 'ying', 'black')
      let o = {
        a: '11',
        b () {
          console.log(this.a)
        }
      }
      console.log(o)
      console.log(animal)
      console.log(cat)
      console.log(Object.keys(o))
      console.log(Object.keys(animal))
      console.log('cat,keys:', Object.keys(cat))
      for (let key in o) {
        console.log('o,for,in:' + o[key])
      }
      for (let key in animal) {
        console.log('animal,for,in:' + animal[key])
      }
      for (let key in cat) {
        console.log('cat,for,in:' + cat[key])
      }
      cat.sayName()
    },
    // 扩展运算符
    demo6 () {
      let obj = {
        arr: [12, 1, 3, 4]
      }
      let obj1 = {...obj}
      console.log(obj1.arr === obj.arr) // true
      obj1.arr.sort(compare)
      console.log(obj.arr) // [1, 1, 3, 4]
      console.log(obj1.arr) // [1,2]
      function compare (a, b) {
        return a - b
      }
    }
  }
}
</script>
<style lang="scss">

</style>

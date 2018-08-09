<template>
  <div>I AM Iterator&forOf</div>
</template>
<script>
export default{
  data () {
    return {

    }
  },
  created () {
    this.demo1()
    // this.demo2()
  },
  methods: {
    // for...of循环，作为遍历所有数据结构的统一的方法。for...of循环可以使用的范围包括数组、Set 和 Map 结构、某些类似数组的对象（比如arguments对象、DOM NodeList 对象）、后文的 Generator 对象，以及字符串。
    demo1 () {
      const arr = ['red', 'green', 'blue']
      const obj = {
        name: 'zhou',
        age: 12
      }
      const str = 'string'
      // 数组
      for (let v of arr) {
        console.log('数组', v)
      }
      // 对象
      try {
        for (let v of obj) {
          console.log(v)
        }
      } catch (err) {
        console.log('对象出错', err)
      }
      // 字符串
      for (let v of str) {
        console.log('字符串' + v)
      }
      // Set和Map结构
      let engines = new Set(['Gecko', 'Trident', 'Webkit', 'Webkit'])
      for (let e of engines) {
        console.log('Set结构:' + e)
      }
      // Map结构
      let es6 = new Map()
      es6.set('edition', 6)
      es6.set('commitee', 'TC39')
      es6.set('standard', 'ECMA-262')
      for (let [name, value] of es6) {
        console.log(name + ':' + value)
      }
      for (let v of es6.entries()) {
        console.log('v', v)
      }
      // 类数组对象
      let paras = document.querySelectorAll('div')
      console.log(paras)
      for (let p of paras) {
        p.classList.add('test')
      }
      console.log(paras)

      let arrayLike = { length: 2, 0: 'a', 1: 'b' }
      for (let x of Array.from(arrayLike)) {
        console.log(x) // a b
      }
    },
    // for...of与其他遍历方法比较
    demo2 () {
      /** for...in循环有几个缺点。
       * 数组的键名是数字，但是for...in循环是以字符串作为键名“0”、“1”、“2”等等
       * for...in循环不仅遍历数字键名，还会遍历手动添加的其他键，甚至包括原型链上的键。
       * 某些情况下，for...in循环会以任意顺序遍历键名。
       * 总之，for...in循环主要是为遍历对象而设计的，不适用于遍历数组。
       * for...of循环调用遍历器接口，数组的遍历器接口只返回具有数字索引的属性。这一点跟for...in循环也不一样。
       * */
      let arr = [3, 5, 7]
      arr.foo = 'hello'
      for (let i in arr) {
        console.log(i) // "0", "1", "2", "foo"
      }

      //
      for (let i of arr) {
        console.log(i) //  "3", "5", "7"
      }

      // 以数组为例，JavaScript 提供多种遍历语法。最原始的写法就是for循环。这种写法比较麻烦
      for (var index = 0; index < arr.length; index++) {
        console.log(arr[index])
      }
      // foreach 这种写法的问题在于，无法中途跳出forEach循环，break命令或return命令都不能奏效。
      arr.forEach(function (value) {
        console.log(value)
      })

      // break return,continue
      for (let n of arr) {
        if (n > 5) { break }
        console.log('for of:', n)
      }
    }
  }
}
</script>
<style lang="scss" >

</style>

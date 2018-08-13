<template>
  <div>I AM Set&Map</div>
</template>
<script>
export default{
  data () {
    return {

    }
  },
  created () {
    // this.demo1()
    this.demo2()
  },
  methods: {
    demo1 () {
      // ES6 提供了新的数据结构 Set。它类似于数组，但是成员的值都是唯一的，没有重复的值。(去重)
      // Set 内部判断两个值是否不同，使用的算法叫做“Same-value-zero equality”，它类似于精确相等运算符（===），主要的区别是NaN等于自身，而精确相等运算符认为NaN不等于自身。两个对象总是不相等的。
      let set = new Set([1, 22, 33, 11, 1, '11', '11', true])
      let set2 = [...set] // 相当于数组去重
      set.add(1111)
      console.log(set)
      console.log(typeof set)
      console.log(set2)
      set2.push(1)
      console.log(set2)
      /** 属性
       * Set.prototype.size：返回Set实例的成员总数。
       * add(value)：添加某个值，返回 Set 结构本身。可链式操作
       * delete(value)：删除某个值，返回一个布尔值，表示删除是否成功。
       * has(value)：返回一个布尔值，表示该值是否为Set的成员。
       * clear()：清除所有成员，没有返回值。
       */
    },
    demo2 () {
      const map = new Map([
        ['name', 'zhou'],
        ['title', 'Author']
      ])
      console.log(map)

      const m2 = new Map([['baz', 3]])
      const m3 = new Map(m2)
      console.log(m2)
      console.log(m3)
      console.log(m2.get('baz'))
      console.log(m3.get('baz')) // 3

      const m = new Map()

      m.set('edition', 6) // 键是字符串
      m.set(262, 'standard') // 键是数值
      m.set(undefined, 'nah') // 键是 undefined
      console.log(m)
      console.log(m.get(undefined))
    }
  }
}
</script>
<style lang="scss" >

</style>

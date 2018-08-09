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
      let set = new Set([1, 22, 33, 11, 1, '11', '11', true])
      let set2 = [...set]
      set.add(1111)
      console.log(set)
      console.log(typeof set)
      console.log(set2)
      set2.push(1)
      console.log(set2)
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

<template>
  <div>
    I AM Traversal
    <div class="buttonBox">
      <button @click="forTraversal">for</button>
      <button @click="forInTraversal">for..in</button>
      <button @click="forOfTraversal">for..of</button>
      <button @click="forEachTraversal">foreach</button>
      <button @click="mapTraversal">map</button>
      <button @click="filterTraversal">filter</button>
      <button @click="reduceTraversal">reduce</button>
      <button @click="everyTraversal">every</button>
      <button @click="someTraversal">some</button>
    </div>
  </div>
</template>
<script>
export default{
  data () {
    return {
      arr: [1, 32, 248, 5, 22, 231],
      arr2: [{name: 'zhou'}, {name: 'zhang'}, {name: 'zhuang'}, {name: 'liu'}, {name: 'zhou'}],
      obj: {
        name: 'zhou',
        age: 24,
        intersting: [],
        say: function () {
          console.log(this.name)
        }
      }
    }
  },
  methods: {
    // for
    forTraversal () {
      let arr = [...this.arr]
      // 冒泡排序
      for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
          if (arr[j] > arr[j + 1]) {
            // 两个变量值互换
            [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
          }
        }
      }
      console.log(arr)
    },
    // for in
    forInTraversal () {
      let obj = {...this.obj}
      for (let key in obj) {
        console.log(obj[key])
      }
    },
    // for fo
    forOfTraversal () {
      let arr = [...this.arr2]
      for (let o of arr) {
        console.log(o)
      }
    },
    // foreach
    forEachTraversal () {
      // forEach() 方法用于调用数组的每个元素，并将元素传递给回调函数。(只适用于数组遍历)
      let arr = [...this.arr]
      let sum = 0
      arr.forEach((element, index, arr) => {
        sum += element
        element = '11'// 无效(传入的这个无法修改到原数组的)
      })
      console.log(sum)
      console.log(arr)
    },
    // map 这个数组的每一项都是在原始数组中对应项上运行传入函数的结果
    mapTraversal () {
      let arr = [...this.arr]
      let mapResult = arr.map((element, index, arr) => {
        return element * 2
      })
      console.log(mapResult)
    },
    // filter 利用指定函数确定是否在返回的数组中包含某一项。
    filterTraversal () {
      let arr = [...this.arr]
      let fileterResult = arr.filter((element, index) => {
        return element > 100
      })
      console.log(fileterResult)

      let arr2 = [...this.arr2]
      let fileterResult2 = arr2.filter((element, index) => {
        return element.name === 'zhou'
      })
      console.log(fileterResult2)
    },
    /**
     * reduce() 从数组第一项开始，逐个遍历到最后，构建一个最终返回的值
     * reduceRight() 从数组最后一项开始，向前遍历到第一项
     * 这两个函数接收两个参数，前一个值，当前值，项的索引和数组对象。
     * 该回调函数返回的任何值都会作为第一个参数自动传给下一项。第一次迭代发生在数组的第二项上，因此第一个参数是数组的第一项，第二个参数是数组的第二项
    */
    reduceTraversal () {
      let arr = [...this.arr]
      let sum = arr.reduce((prev, cur, index, arr) => {
        console.log(prev)
        return prev + cur
      })
      console.log('sum:', sum)
    },
    // 查询数组中的项是否满足某个条件 对 every()来说，传入的函数必须对每一 都返回 true，这个方法才返回 true;否则，它就返回false
    everyTraversal () {
      let arr = [...this.arr]
      let everyResult = arr.every((item, index, arr) => {
        return item > 100
      })
      console.log(everyResult)
    },
    // some()方法则是只要传入的函数对数组中的某一 返回 true，就会返回 true。
    someTraversal () {
      let arr = [...this.arr]
      let someResult = arr.some((item, index, arr) => {
        return item > 100
      })
      console.log(someResult)
    }
  }
}
</script>
<style lang="scss">
  .buttonBox{
    margin-top:100px;
    button{
      margin:0 10px;
    }
  }
</style>

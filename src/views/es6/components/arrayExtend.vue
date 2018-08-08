<template>
  <div>I AM array</div>
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
    // this.demo6()
    this.demo7()
  },
  methods: {
    // 扩展运算符
    demo1 () {
      /** 将一个数组转为用逗号分隔的参数序列******************* */
      let arr = [1, 2, 3]
      function arrStr (x, y, z) {
        console.log(x, y, z)
      }
      arrStr(...arr)
      /** 扩展运算符后面还可以放置表达式******************** */
      let x = 1
      const arr2 = [
        ...(x > 0 ? ['a'] : [])
      ]
      console.log(arr2)
      /** 代替apply方法(打散数组)******************** */
      // ES5
      Math.max.apply(null, [14, 3, 77]) // 77
      // ES6
      Math.max(...[14, 3, 77])// 77
      /** 应用******************************** */
      // 1.克隆数组
      let a1 = [1, 2]
      let a2 = [...a1]
      let [...a3] = a1
      console.log(a2, a3)
      // 2.合并数组
      let b1 = [1, 2]
      let b2 = [3, 4]
      let merge = [...b1, ...b2]
      console.log(merge)
      // 上面代码中，a3和a4是用两种不同方法合并而成的新数组，但是它们的成员都是对原数组成员的引用，这就是浅拷贝。如果修改了原数组的成员，会同步反映到新数组。
      const c1 = [{ foo: 1 }]
      const c2 = [{ bar: 2 }]
      const c3 = c1.concat(c2)
      const c4 = [...c1, ...c2]
      console.log(c3[0] === c1[0]) // true
      console.log(c4[0] === c1[0]) // true
      c1[0].foo = '3'
      console.log(c3)
      // 扩展运算符还可以将字符串转为真正的数组。
      console.log([...'hello'])
      // 任何 Iterator 接口的对象（参阅 Iterator 一章），都可以用扩展运算符转为真正的数组。
      let nodeList = document.querySelectorAll('div')
      let array = [...nodeList]
      console.log(array)
    },
    // Array.from()
    demo2 () {
      // Array.from方法用于将类对象转为真正的数组：类似数组的对象（array-like object）和可遍历（iterable）的对象（包括 ES6 新增的数据结构 Set 和 Map）
      // 扩展运算符背后调用的是遍历器接口（Symbol.iterator），如果一个对象没有部署这个接口，就无法转换。Array.from方法还支持类似数组的对象。所谓类似数组的对象，本质特征只有一点，即必须有length属性。因此，任何有length属性的对象，都可以通过Array.from方法转为数组，而此时扩展运算符就无法转换。
      let divs = document.querySelectorAll('div')
      let arr = Array.from(divs).concat('123')
      console.log(arr)

      function foo () {
        var args = Array.from(arguments)
        console.log(args)
        // ...
      }
      foo('aa', 'bb')

      // Array.from还可以接受第二个参数，作用类似于数组的map方法，用来对每个元素进行处理，将处理后的值放入返回的数组。
      let arrayLike = [1, 2, 3]
      Array.from(arrayLike, x => x * x)
      // 等同于
      Array.from(arrayLike).map(x => x * x)
      // 数组中布尔值为false的成员转为0
      // let arrTest = [1, , 2, , 3]
      // Array.from(arrTest, (n) => n || 0) // [1, 0, 2, 0, 3]
      // 返回各种数据的类型。
      function typesOf () {
        return Array.from(arguments, value => typeof value)
      }
      typesOf(null, [], NaN) // ['object', 'object', 'number']

      // Array.from()可以将各种值转为真正的数组，并且还提供map功能。这实际上意味着，只要有一个原始的数据结构，你就可以先对它的值进行处理，然后转成规范的数组结构，进而就可以使用数量众多的数组方法。
      // Array.from的第一个参数指定了第二个参数运行的次数。这种特性可以让该方法的用法变得非常灵活。
      Array.from({ length: 2 }, () => 'jack')// ['jack', 'jack']
    },
    // Array.of()
    demo3 () {
      // Array.of方法用于将一组值，转换为数组。这个方法的主要目的，是弥补数组构造函数Array()的不足。因为参数个数的不同，会导致Array()的行为有差异。
      // let a = new Array() // []
      // let b = new Array(3) // [, , ,]
      // let c = new Array(3, 11, 8) // [3, 11, 8]
      // console.log(a, b, c)
      let d = Array.of() // []
      let e = Array.of(undefined) // [undefined]
      let f = Array.of(1) // [1]
      let g = Array.of(1, 2) // [1, 2]
      console.log(d, e, f, g)
    },
    // find(),findIndex()
    demo4 () {
      // 数组实例的find方法，用于找出第一个符合条件的数组成员。它的参数是一个回调函数，所有数组成员依次执行该回调函数，直到找出第一个返回值为true的成员，然后返回该成员。如果没有符合条件的成员，find方法返回undefined，findIndex返回-1
      let arr = [1, 5, 10, 13]
      arr.find((value, index, arr) => {
        if (value > 9) {
          console.log(value)
        }
        return value > 9
      })
      arr.findIndex((value, index, arr) => {
        if (value > 9) {
          console.log(value)
        }
        return value > 9
      })
    },
    // fill()
    demo5 () {
      // fill方法使用给定值，填充一个数组。
      let arr = ['a', 'b', 'c'].fill(7)
      console.log(arr)
      let arr2 = new Array(3).fill(7)
      console.log(arr2)
      // fill方法还可以接受第二个和第三个参数，用于指定填充的起始位置和结束位置。
      let arr3 = ['a', 'b', 'c'].fill(7, 1, 2)
      console.log(arr3)
      // 如果填充的类型为对象，那么被赋值的是同一个内存地址的对象，而不是深拷贝对象。
      let arr4 = new Array(3).fill({name: 'Mike'})
      console.log(arr4[0])
      arr4[0].name = 'Ben'
      console.log(arr4[1])
    },
    // 数组实例的 entries()，keys() , values() 和 includes()
    demo6 () {
      // ES6 提供三个新的方法——entries()，keys()和values()——用于遍历数组。它们都返回一个遍历器对象（详见《Iterator》一章），可以用for...of循环进行遍历，唯一的区别是keys()是对键名的遍历、values()是对键值的遍历，entries()是对键值对的遍历。
      for (let index of ['a', 'b'].keys()) {
        console.log(index)
      }
      for (let elem of ['a', 'b'].values()) {
        console.log(elem)
      }
      for (let [index, elem] of ['a', 'b'].entries()) {
        console.log(index, elem)
      }

      // Array.prototype.includes方法返回一个布尔值，表示某个数组是否包含给定的值，与字符串的includes方法类似。
      console.log([1, 2, 3].includes(2)) // true
      console.log([1, 2, 3].includes(4)) // false
      console.log([1, 2, NaN].includes(NaN)) // true
      // includes在对比引用类型的时候是对比内存中指向的
      let arr = [{a: '1'}, {a: '3'}, {a: '4'}]
      let obj = {a: '34'}
      arr.push(obj)
      console.log(arr.includes(obj)) // true
      console.log(arr.includes({a: '1'})) // false
      // 该方法的第二个参数表示搜索的起始位置，默认为0。如果第二个参数为负数，则表示倒数的位置，如果这时它大于数组长度（比如第二个参数为-4，但数组长度为3），则会重置为从0开始。
      console.log([1, 2, 3].includes(3, 3)) // false
      console.log([1, 2, 3].includes(3, -1)) // true
    },
    // 数组的空位
    demo7 () {
      // ES5 对空位的处理，已经很不一致了，大多数情况下会忽略空位。
      // ES6 则是明确将空位转为undefined。
      /**
       * forEach(), filter(), reduce(), every() 和some()都会跳过空位。
       * map()会跳过空位，但会保留这个值
       * join()和toString()会将空位视为undefined，而undefined和null会被处理成空字符串。
      */
    }
  }
}
</script>
<style lang="scss" >

</style>

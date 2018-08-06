<template>
  <div>I am string</div>
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
    this.demo3()
  },
  methods: {
    // Unicode
    demo1 () {
      // ES6 为字符串添加了遍历器接口（详见《Iterator》一章），使得字符串可以被for...of循环遍历。
      for (let codePoint of 'foo') {
        console.log(codePoint) // "f" "o" "o"
      }

      // 这个遍历器最大的优点是可以识别大于0xFFFF的码点，传统的for循环无法识别这样的码点
      let text = String.fromCodePoint(0x20BB7)
      for (let i = 0; i < text.length; i++) {
        console.log(text[i])
      }
      // " "
      // " "
      for (let i of text) {
        console.log(i)
      }
      // "𠮷"
    },
    // 自动补全
    demo2 () {
      /**
       * includes()：返回布尔值，表示是否找到了参数字符串。
       * startsWith()：返回布尔值，表示参数字符串是否在原字符串的头部。
       * endsWith()：返回布尔值，表示参数字符串是否在原字符串的尾部
      */

      let s = 'Hello world!'
      console.log(s.startsWith('Hello'))// true
      console.log(s.endsWith('!')) // true
      console.log(s.includes('o')) // true

      // 这三个方法都支持第二个参数，表示开始搜索的位置。
      // 使用第二个参数n时，endsWith的行为与其他两个方法有所不同。它针对前n个字符，而其他两个方法针对从第n个位置直到字符串结束。
      let z = 'Hello world!'
      console.log(z.startsWith('world', 6))// true
      console.log(s.endsWith('Hello', 5)) // true
      console.log(s.includes('Hello', 6)) // false

      /**
       * repeat() repeat方法返回一个新字符串，表示将原字符串重复n次。
      */
      console.log('x'.repeat(3))// "xxx"
      console.log('hello'.repeat(2)) // "hellohello"
      console.log('na'.repeat(0)) // ""

      // 参数如果是小数，会被下取整
      console.log('na'.repeat(2.9))

      /** 如果某个字符串不够指定长度，会在头部或尾部补全。
       * padStart() 用于头部补全,第一个参数用来指定字符串的最小长度，第二个参数是用来补全的字符串。
       * padEnd() 用于尾部补全,第一个参数用来指定字符串的最小长度，第二个参数是用来补全的字符串。
      */
      console.log('x'.padStart(5, 'ab')) // 'ababx'
      console.log('x'.padStart(4, 'ab')) // 'abax'

      console.log('x'.padEnd(5, 'ab')) // 'xabab'
      console.log('x'.padEnd(4, 'ab')) // 'xaba'

      // padStart的常见用途是为数值补全指定位数。下面代码生成 10 位的数值字符串
      console.log('1'.padStart(10, '0')) // "0000000001"
      console.log('12'.padStart(10, '0')) // "0000000012"
      console.log('123456'.padStart(10, '0')) // "0000123456"

      // 提示字符串格式。
      console.log('12'.padStart(10, 'YYYY-MM-DD')) // "YYYY-MM-12"
      console.log('09-12'.padStart(10, 'YYYY-MM-DD')) // "YYYY-09-12"
    },
    // 模板字符串
    demo3 () {
      // 模板字符串（template string）是增强版的字符串，用反引号（`）标识。它可以当作普通字符串使用，也可以用来定义多行字符串，或者在字符串中嵌入变量。如果在模板字符串中需要使用反引号，则前面要用反斜杠转义。因此如果大括号内部是一个字符串，将会原样输出。
      let str = 'aa'
      console.log(`周${str}
        haha\`${'影'}
      `)

      // 大括号内部可以放入任意的 JavaScript 表达式，可以进行运算，以及引用对象属性。
      let x = 1
      let y = 2

      console.log(`${x} + ${y} = ${x + y}`)
      // "1 + 2 = 3"

      console.log(`${x} + ${y * 2} = ${x + y * 2}`)
      // "1 + 4 = 5"

      let obj = {x: 1, y: 2}
      console.log(`${obj.x + obj.y}`)
      // "3"

      // 模板字符串之中还能调用函数。
      function fn () {
        return 'Hello World'
      }

      console.log(`foo ${fn()} bar`)
    }
  }
}
</script>
<style lang="scss" >

</style>

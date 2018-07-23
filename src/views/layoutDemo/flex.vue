<template>
  <div class="container">
    <div class="main">
      <div class="box"></div>
      <div class="box"></div>
      <div class="box"></div>
      <div class="box"></div>
      <div class="box"></div>
      <div class="box"></div>
    </div>
    <div class="left"></div>
    <div class="right"></div>
  </div>
</template>
<script>
export default{
  data () {
    return {

    }
  }
}
</script>
<style lang="scss" scoped>
  .container{
    display: flex;
    min-height: 100%;
  }
  .main{
    flex-grow: 1;
    background-color: blue;
  }
  .left{
    order:-1;
    flex-basis: 200px;
    background-color: green;
  }
  .right{
    flex-basis: 300px;
    background-color: red;
  }
  .box{
    width:100%;
    height:300px;
    border:1px solid red;
  }
</style>

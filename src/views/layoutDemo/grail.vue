<template>
  <div class="grail">
    <div class="main"></div>
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
<style scoped lang="scss">
  .grail{
    padding:0 300px 0 200px;
    .left,.main,.right{
      position: relative;
      min-height:130px;
      float: left;
    }
    .main{
      width:100%;
      background-color: blue;
    }
    .left{
      width:200px;
      left:-200px;
      margin-left:-100%;
      background: green;
    }
    .right{
      width:300px;
      right:-300px;
      margin-left:-300px;
      background-color: red;
    }
  }
</style>

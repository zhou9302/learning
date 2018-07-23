<template>
  <div class="layout">
    <div class="nav"></div>
    <div class="left" v-if="show">
      <div class="san"></div>
      <div class="san"></div>
      <div class="san"></div>
      <div class="san"></div>
      <div class="san"></div>
      <div class="san"></div>
    </div>
    <div :class="{right:true, ml:!show}">
      <button @click="show=!show">关闭</button>
      <div class="san"></div>
      <div class="san"></div>
      <div class="san"></div>
      <div class="san"></div>
      <div class="san"></div>
      <div class="san"></div>
    </div>
  </div>
</template>
<script>
export default{
  data () {
    return {
      show: true
    }
  }
}
</script>
<style lang="scss" scoped>
  .layout{
    width: 100%;
    position: relative;
    .nav{
      position: fixed;
      width:100%;
      height:50px;
      background-color: red;
      z-index: 100;
    }
    .left{
      width:300px;
      position: fixed;
      top:0;
      bottom: 0;
      left:0;
      background-color: green;
      padding-top:50px;
      overflow: scroll;
    }
    .right{
      height: 100%;
      background-color: yellow;
      margin-left:300px;
      padding-top:50px;
      transition: margin-left .5s;
    }
    .san{
      width:100%;
      height:300px;
      border:1px solid red;
    }
    .ml{
      margin-left: 0;

    }
  }
</style>

<template>
  <section class="shopCartCantainer">
    <header class="shopCartHeader">
      <span class="left">购物车</span>
      <span class="right">领券</span>
    </header>
    <div class="splict">
      <div class="left">
        <i>○</i>
        <span>30天天优退货</span>
      </div>
      <div class="middle">
        <i>○</i>
        <span>30天天优退货</span>
      </div>
      <div class="right">
        <i>○</i>
        <span>30天天优退货</span>
      </div>
    </div>
    <div class="shopCartBottom">
      <img src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/noCart-d6193bd6e4.png" alt="">
      <span>去买点东西吧</span>
      <span class="btn">登录</span>
    </div>
  </section>
</template>

<script type="text/ecmascript-6">
  export default {
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .shopCartCantainer
    width 100%
    height 88px
    .shopCartHeader
      width 100%
      height 88px
      line-height 88px
      background-color  white
      padding 0 30px
      font-size 0.52rem
      box-sizing border-box
      .left
        float left
      .right 
        float right 
    .splict
      display flex
      justify-content space-around
      box-sizing border-box
      padding 0 30px
      height 70px 
      background-color #cccccc
      line-height 70px
    .shopCartBottom
      display flex
      flex-direction column
      justify-content center
      align-items center
      margin-top 270px
      img 
        width 248px
        height 248px
      .btn
        width 480px
        height 92px
        background red
        border-radius 10px
        font-size 0.6rem
        color white
        text-align center
        line-height 92px
        margin-top 30px

</style>

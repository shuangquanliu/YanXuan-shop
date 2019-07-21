<template>
  <div id="smallCantainer">
    <div class="left">
      <div class="header">
        <img src="https://yanxuan.nosdn.127.net/a714aeeb574585d3e23d35f1ee2db8b8.png?imageView&quality=65&thumbnail=56y56" alt="">
        <span class="title">选美</span>
      </div>
      <div class="middle">
        <p class="detail">夏凉用品购置指南，凉席、空调被请趣味、凉感四件套每满100立减20</p>
        <span class="desc">鲜榨每日坚果</span>
      </div>
      <div class="bottom">
        <i class="iconfont icon-tupian"></i>
        <span class="count">23332人看过</span>
      </div>
    </div> 
    <div class="right">   
      <img src="https://yanxuan.nosdn.127.net/c0359f2f05aaee841da5dc09bfa23362.jpg?imageView&quality=65&thumbnail=272y272" alt="">        
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  #smallCantainer
    margin-top 30px
    background-color white
    box-sizing border-box
    padding .36rem .3rem
    display flex
    .left
      width 60%
      display flex
      flex-direction column
      justify-content space-around
      .header
        >img 
          border-radius 50%
          vertical-align middle
        .title
          margin-left 30px
          font-size 30px
      .middle
        margin-top: 10px;
        font-size: 35px;
        line-height: 50px;
        .detail
          margin-top 10px
          font-size 30px
          line-height 50px
        .desc
          display block
          color #cccccc
          margin 10px 0
      .bottom
        .iconfont
          font-size 30px
          margin-right 20p
          margin-right 30px
    .right
      width 40%
      >img  
        width 100%
        height 100%
        border-radius 10px
</style>

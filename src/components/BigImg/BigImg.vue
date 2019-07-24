<template>
  <div id="bigImgCantainer" v-if="big.nickname">
    <div class="header">
        <img :src="big.avatar" alt="">
        <span class="title">{{big.nickname}}</span>
    </div>
    <p class="desc">{{big.title}}</p>
    <div class="bottom">   
        <img :src="big.picUrl" alt="">
        <i class="iconfont icon-tupian"></i>
        <span class="count">{{big.readCount}}人看过</span>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props:{
      big:Object
    },
    watch:{

    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  #bigImgCantainer
    margin-top 30px
    background-color white
    box-sizing border-box
    padding .36rem .3rem
    .header
      width 100%
      >img
        border-radius 50%
        width 54px
        height 54px
        vertical-align middle
      .title
        // color pink 
        vertical-align middle
        margin-left 30px
        font-size 30px
    .desc
      margin-top 10px
      font-size 30px
      line-height 50px
    .bottom
      margin-top 10px
      color #001231
      >img
        width 100%
        height 100%
        border-radius 10px
        margin 10px 0
      .iconfont
        font-size 30px
        margin-right 20px
</style>

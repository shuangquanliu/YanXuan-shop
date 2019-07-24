<template>
  <div id="smallCantainer" v-if="small.nickname">
    <div class="left">
      <div class="header">
        <img :src="small.avatar" alt="">
        <span class="title">{{small.nickname}}</span>
      </div>
      <div class="middle">
        <p class="detail">{{small.title}}</p>
        <span class="desc">{{small.subTitle}}</span>
      </div>
      <div class="bottom">
        <i class="iconfont icon-tupian"></i>
        <span class="count">{{small.readCount}}人看过</span>
      </div>
    </div> 
    <div class="right">   
      <img :src="small.picUrl" alt="">        
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props:{
      small:Object
    },
    mounted(){
      // console.log(this.small)
    }
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
          width 54px
          height 54px
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
          font-size 0.32rem
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

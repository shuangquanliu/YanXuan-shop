<template>
  <div id="headerCantainer">
     <div class="header border-1px">
      <i class="iconfont icon-shouye" @click="$router.push('/home')"></i>
      <div class="middle">
        <a @click="$router.push('/display/displaylist?id=0')" :class="{active:$route.path === '/display/displaylist'}">发现</a>
        <a @click="$router.push('/expert')" :class="{active:$route.path === '/expert'}" >臻选家</a>
      </div>
      <div class="right">
        <i class="iconfont icon-sousuo" @click="$router.push('/search')"></i>
        <i class="iconfont icon-gouwuche"></i>
      </div>
    </div>
    
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data () {
    return {
       isShowDiscover:true,//当为true显示发现 false显示臻选家
    }
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import '../../common/stylus/mixins.styl';
  #headerCantainer  
    .header 
      position relative
      z-index 10
      bottom-border-1px(black);
      height: 88px;
      box-sizing: border-box;
      padding: 0 30px;
      background-color white
      display: flex;
      align-items: center;
      justify-content: space-around;
      .icon-shouye 
        font-size: 0.7rem;
      .middle 
        width: 70%;
        font-size: 0.42rem;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
        a 
          display: block;
          margin-left: 20px;
          &.active 
            color: $red;
            font-size: 43px;
            font-weight: bold;               
      .right 
        .iconfont 
          font-size: 0.7rem;
        .icon-sousuo 
          margin-right: 30px;

</style>

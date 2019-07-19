<template>
  <div id="footerCantainer" class="border-1px">
    <ul class="footerList">
      <li class="footerItem">
        <a href="javascript:;"  @click="gotoHome('/home')" :class="{active:$route.path === '/home'}">
          <i class="iconfont icon-shouye"></i>
          <span>首页</span>
        </a>
      </li>
      <li class="footerItem">
        <a href="javascript:;"  @click="gotoHome('/category')" :class="{active:$route.path === '/category'}">
          <i class="iconfont icon-fenlei"></i>
          <span>分类</span>
        </a>
      </li>
      <li class="footerItem">
        <a href="javascript:;" @click="gotoHome('/display')" :class="{active:$route.path === '/display'}">
          <i class="iconfont icon-tupian"></i>
          <span>识物</span>
        </a>
      </li>
      <li class="footerItem">
        <a href="javascript:;" @click="gotoHome('/shopcart')" :class="{active:$route.path === '/shopcart'}">
          <i class="iconfont icon-gouwuche"></i>
          <span>购物车</span>
        </a>
      </li>
      <li class="footerItem">
        <a href="javascript:;" @click="gotoHome('/profile')" :class="{active:$route.path === '/profile'}">
            <i class="iconfont icon-geren"></i>
          <span>个人</span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data () {
      return {
        
      }
    },
    methods:{
      gotoHome(path){
        this.$router.replace(path)
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import '../../common/stylus/mixins.styl';
  $rem = 75rem;
  #footerCantainer
    top-border-1px(#ccc)
    width 100%
    height 98/$rem
    background-color white
    position fixed
    bottom 0
    right 0   
    z-index 10
    .footerList
      display flex  
      align-items center
      width 100%
      height 98px
      .footerItem
        width 20%
        a
          display flex
          flex-direction column
          align-items center
          &.active
            color $red         
          .iconfont
            font-size 40px
            margin-bottom 2px
         


      

 
</style>

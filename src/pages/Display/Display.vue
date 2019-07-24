<template>
  <div id="displayContainer">
    <Header/>
    <div class="scrollWaper">
      <ul class="navList">
        <li v-for="(item,index) in listArr" :key="index" @click="newIndex = index" class="navItem" >
            <router-link :to="{path:'/display/displaylist',query:{id:index}}">
            {{item}}
            </router-link>
        </li>
      </ul>
    </div>
      <router-view/>
  </div>
</template>

<script type="text/ecmascript-6">
import BScroll from "better-scroll";
import Header from '../../components/Header/Header.vue'
export default {
  data() {
    return {
      newIndex:0,
      listArr:["推荐","好货内部价","回购榜","晒晒","张三","王老五","李大牛","张大铁",'张老板',"好货内部价","回购榜","晒晒","张三","王老五","李大牛","张大铁"]
    };
  },
  mounted(){

        this.$nextTick(()=>{
          // 水平滑动
          new BScroll('.scrollWaper', {
            click: true,
            scrollX: true, // 水平滑动
          })
      })
      
    },
    components:{

      Header
    }
};
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
@import '../../common/stylus/mixins.styl';

#displayContainer 
  // background-color #F2F5F4
  height 1334px
  position relative
  z-index 10
  .scrollWaper
    width 100%
    height 72px
    display flex
    background-color white
    position relative
    z-index 10
    .navList
      display flex
      align-items center
      .navItem
        // width 180px
        width 180px
        height 72px
        text-align center
        box-sizing border-box
        a
          display inline
          // width 180px  
          height 72px
          line-height 72px
          font-size 0.35rem
          padding 0 30px
          box-sizing border-box
          position relative
          &.router-link-exact-active
            color $red
            &::after
              content ''
              position absolute
              left 50%
              bottom -10px
              width 100px
              height 2px
              transform translateX(-50%)
              background $red
  .scrollWraper1
    max-height 1050px  
</style>

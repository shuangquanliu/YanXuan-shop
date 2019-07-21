<template>
  <div id="DiscoverCantainer">
      <div class="scrollWaper">
        <ul class="navList">
        <li v-for="(item,index) in listArr" :key="index" @click="newIndex = index" :class="index===newIndex?'navItem active':'navItem'">
          <a href="javascript:;">
            {{item}}
            </a>
          </li>
        </ul>
      </div>
      <div class="scrollWraper1">
        <div class="scrollList">
          <BigImg/>
          <SmallImg/>
          <BigImg/>
          <SmallImg/>
          <BigImg/>
          <SmallImg/>
        </div>
      </div>
  </div>
</template>

<script type="text/ecmascript-6">
 import BScroll from 'better-scroll'
 import BigImg from '../../../components/BigImg/BigImg.vue'
 import SmallImg from '../../../components/SmallImg/SmallImg.vue'
 export default {
    data(){

      return{
        newIndex:0,
        listArr:["推荐","好货内部价","回购榜","晒晒","张三","王老五","李大牛","张大铁",'张老板',"好货内部价","回购榜","晒晒","张三","王老五","李大牛","张大铁"]
      }
    },
    methods:{
    
    },
    mounted(){
        this.$nextTick(()=>{
          // 水平滑动
          new BScroll('.scrollWaper', {
            click: true,
            scrollX: true, // 水平滑动
          })
      })
       // 垂直
      new BScroll('.scrollWraper1', {
        click: true,
        // scrollX: true, // 水平滑动
      })
    },
    components:{
      BigImg,
      SmallImg
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
@import '../../../common/stylus/mixins.styl';
#DiscoverCantainer
  height 100%
  background-color $bc
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
        width 180px
        height 72px
        text-align center
        box-sizing border-box
        &.active
          border-bottom 4px solid $red !important
        a
          display inline
          width 180px  
          height 72px
          line-height 72px
          font-size 0.35rem
          padding 0 30px
          box-sizing border-box
  .scrollWraper1
    max-height 1334px  
</style>

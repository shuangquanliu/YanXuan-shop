<template>
  <div id="categoryContainer">
    <header class="categoryHeader">
      <input type="text" placeholder="搜索商品，共21235件商品">
      <i class="iconfont icon-sousuo"></i>
    </header>
    <div class="listWraper">
      <section class="leftWraper" ref="leftWraper">
        <ul class="leftList" ref="leftList">
          <li class="leftListItem" v-for="(item,index) in listArr" :key="index" :class="index === newIndex?'leftListItem active':'leftListItem'" @click="active(index)">
            <a href="javascript:;">{{item}}</a>
          </li>
        </ul>
      </section>
      <section class="rightWraper">
        <div class="rightWraperList">
          <a href="javascript:;" >
            <img src="http://yanxuan.nosdn.127.net/ebf42d9334b2e23c009313eb097aadd2.jpg" alt="" class="banner">
          </a>
          <ul class="categoryList">
            <li class="categoryItem">
              <a href="javascript:;">
                <div class="categoryImge">
                  <img src="http://yanxuan.nosdn.127.net/fc87526ae9be33dfa45800567ec735d3.png" alt="" >
                </div>
                <span class="title">品质生活</span>
              </a>
            </li>
            <li class="categoryItem">
              <a href="javascript:;">
                <div class="categoryImge">
                  <img src="http://yanxuan.nosdn.127.net/fc87526ae9be33dfa45800567ec735d3.png" alt="" >
                </div>
                <span class="title">品质生活</span>
              </a>
            </li>
            <li class="categoryItem">
              <a href="javascript:;">
                <div class="categoryImge">
                  <img src="http://yanxuan.nosdn.127.net/fc87526ae9be33dfa45800567ec735d3.png" alt="" >
                </div>
                <span class="title">品质生活</span>
              </a>
            </li>
            <li class="categoryItem">
              <a href="javascript:;">
                <div class="categoryImge">
                  <img src="http://yanxuan.nosdn.127.net/fc87526ae9be33dfa45800567ec735d3.png" alt="" >
                </div>
                <span class="title">品质生活</span>
              </a>
            </li>
             <li class="categoryItem">
              <a href="javascript:;">
                <div class="categoryImge">
                  <img src="http://yanxuan.nosdn.127.net/fc87526ae9be33dfa45800567ec735d3.png" alt="" >
                </div>
                <span class="title">品质生活</span>
              </a>
            </li>
             <li class="categoryItem">
              <a href="javascript:;">
                <div class="categoryImge">
                  <img src="http://yanxuan.nosdn.127.net/fc87526ae9be33dfa45800567ec735d3.png" alt="" >
                </div>
                <span class="title">品质生活</span>
              </a>
            </li>
             <li class="categoryItem">
              <a href="javascript:;">
                <div class="categoryImge">
                  <img src="http://yanxuan.nosdn.127.net/fc87526ae9be33dfa45800567ec735d3.png" alt="" >
                </div>
                <span class="title">品质生活</span>
              </a>
            </li>
          </ul>
        </div>
      </section>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import BScroll from 'better-scroll'

  export default {
    data () {
      return {
        newIndex:0,
        listArr:['推荐专区','推荐专区','推荐专区','推荐专区','推荐专区','推荐专区','推荐专区','推荐专区']
      }
    },
    mounted(){

        //主页竖向滑屏
        const leftWraper = new BScroll('.leftWraper', {
          click: true, 
        })

         //主页竖向滑屏
        const rightWraper = new BScroll('.rightWraper', {
          click: true, 
        })
        
        // const listWraperHeight =  this.$refs.leftList.clientHeight - 10
        // this.$refs.leftWraper.style.height = listWraperHeight + 'px'
        
      },
    methods:{
      active(index){
        this.newIndex = index
      },
    } 
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  #categoryContainer
    width 100%
    .categoryHeader
      width 100%
      height 88px
      line-height 88px
      background-color white
      text-align center
      position relative
      z-index 3
      input 
        width 690px
        height 52px
        background-color #eeeeee
        border-radius 5px
        text-align center
        outline-style none
      .iconfont
        font-size 0.32rem
        position absolute
        left 0
        top 2px
        margin-left 200px
    .listWraper
      display flex
      .leftWraper 
        width 162px
        height 1246px
        .leftList
          display flex
          flex-direction column
          min-height 1400px
          // Justify-content space-between
          .leftListItem
            width 162px
            height 50px
            text-align center
            line-height 50px
            margin-top 40px
            box-sizing border-box
            &.active
              border-left 4px solid red 
              color red
            &:first-child
              margin-top 0
            >a
              display block
              color black
      .rightWraper
        height 100%
        width 100%
        height 1246px
        margin-bottom 40px
        padding .4rem .4rem .28rem
        .rightWraperList
          min-height 1334px
          a
            display block 
            width 100%
            height 192px
            .banner
              width 100%
              height 192px
          .categoryList
            margin-top 32px
            display flex
            flex-wrap wrap
            .categoryItem
              margin-left 30px
              >a
                display flex
                flex-direction column
                align-items center
                .categoryImge
                  height 1.92rem
                  width 1.92rem
                  >img 
                    width 100%
                    height 100% 

          
</style>

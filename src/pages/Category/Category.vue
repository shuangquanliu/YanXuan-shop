<template>
  <div id="categoryContainer">
    <header class="categoryHeader">
      <input type="text" placeholder="搜索商品，共21235件商品">
      <i class="iconfont icon-sousuo"></i>
    </header>
    <div class="listWraper">
      <section class="leftWraper" ref="leftWraper">
        <ul class="leftList" ref="leftList">
          <li class="leftListItem" v-for="(item,index) in categoryData.categoryL1List" :key="index" :class="index === newIndex?'leftListItem active':'leftListItem'" @click="active(index)">
            <router-link :to="{path:'/category/categorylist',query:{id:item.id}}">{{item.name}}</router-link>
          </li>
        </ul>
      </section>
      <keep-alive>
        <router-view/>
      </keep-alive>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import BScroll from 'better-scroll'
  import { mapState } from "vuex";
  export default {
    data () {
      return {
        newIndex:0,
      }
    },
    computed: {
      ...mapState(['categoryData'])
    },
    async mounted(){

        await this.$store.dispatch('getCategory')
        //主页竖向滑屏
        const leftWraper = new BScroll('.leftWraper', {
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
      

          
</style>

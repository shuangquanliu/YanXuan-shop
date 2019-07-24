<template>
  <div id="rightCantainer">
     <section class="rightWraper">
        <div class="rightWraperList">
          <a href="javascript:;" >
            <img :src="category.wapBannerUrl" alt="" class="banner">
          </a>
          <ul class="categoryList">
            <li class="categoryItem" v-for="(item,index) in category.subCateList" :key="index">
              <a href="javascript:;">
                <div class="categoryImge">
                  <img :src="item.wapBannerUrl" alt="" >
                </div>
                <span class="title">{{item.name}}</span>
              </a>
            </li>
          </ul>
        </div>
      </section>
  </div>
</template>

<script type="text/ecmascript-6">
  import BScroll from 'better-scroll'
  import { mapState } from 'vuex'

  export default {
      data () {
          return {
              category:{},             
          }
      },
      computed: {
        ...mapState(['categoryData'])
      },
      async mounted () {

         await this.$store.dispatch('getCategory')
        const id  = this.$route.query.id ? this.$route.query.id:'1022001';


       if (this.categoryData.categoryL1List) {
          this.category = this.categoryData.categoryL1List.find(category => category.id ===id*1)
       }
  
       

        //主页竖向滑屏
        const rightWraper = new BScroll('.rightWraper', {
          click: true, 
        })
        
      },
      watch: {
        $route(){
          const id  = this.$route.query.id ? this.$route.query.id: '1022001';
          this.category = this.categoryData.categoryL1List.find(category => category.id ===id*1)
        }
      }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
   #rightCantainer 
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
              .title
                display block
                width 1.92rem
                text-align center
                font-size 0.32rem
                line-height 0.35rem
//                 overflow: hidden;
//                 text-overflow: ellipsis;
//                 white-space: nowrap;
// </style>

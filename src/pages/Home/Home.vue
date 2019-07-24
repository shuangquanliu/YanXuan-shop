<template>
  <div id="homeCantainer">
    <header class="homeHeader">
      <h1>
        <a href="javascript:;" class="logo">
          <img src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-a90bdaae6b.png" alt="">
        </a>
      </h1>
      <section class="search" @click="$router.push('/search')">
        <input type="text" placeholder="搜索商品，共21713款好物品" > 
        <i class="iconfont icon-sousuo"></i>
      </section>
      <section class="login">
        <span @click="$router.push('/login')">登录</span>
      </section>
    </header>
    <div class="tabwrap">
      <!-- 横向导航 -->
      <div class="scrollWaper" >
        <ul class="tabList">
          <li class="tabItem " v-for="(item, index) in navList" :key="index" :class="newIndex ===index ?'tabItem active':'tabItem'" @click="newIndex = index">
            <a href="javascript:;" >{{item}}</a>
          </li>
        </ul>
      </div>
      <!-- 全部频道 -->
       <div class="m-indexHd" :class="{withMask:!isShow}">
        <div class="tableter">
          全部分类
        </div>
        <div class="morecart">
          <ul class="morecartList">
            <li v-for="(item, index) in navList" :key="index">
              <a>
                {{item}}
              </a>
            </li>
          </ul>
        </div>
        <div class="mask" @click="isShow = false"></div>
      </div>
      <div class="linear"></div>
      <div class="toggle" @click="isShow = !isShow" >
          <!-- <i class="iconfont icon-sanjiaoxing" :class="upOrDown"></i>    -->
          <img :class="isShow?'upRotate':'downRotate'" src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/arrow-down-3-799ded53ea.png" >
      </div>
    </div>
    <div class="homeScrollWaper">
      <div class="homeScrollWaperList">
        <!-- 轮播图 -->
        <div class="swiper-container">
          <div class="swiper-wrapper">
              <div class="swiper-slide">
                <a href="javascript:;">
                  <img src="https://yanxuan.nosdn.127.net/5d8d67832db5757f2941c3cfe0ffd558.jpg?imageView&quality=75&thumbnail=750x0" alt="">
                </a>
              </div>
              <div class="swiper-slide">
                <a href="javascript:;">
                  <img src="https://yanxuan.nosdn.127.net/5d8d67832db5757f2941c3cfe0ffd558.jpg?imageView&quality=75&thumbnail=750x0" alt="">
                </a>
              </div>
              <div class="swiper-slide">
                <a href="javascript:;">
                  <img src="https://yanxuan.nosdn.127.net/5d8d67832db5757f2941c3cfe0ffd558.jpg?imageView&quality=75&thumbnail=750x0" alt="">
                </a>
              </div>
              <div class="swiper-slide">
                <a href="javascript:;">
                  <img src="https://yanxuan.nosdn.127.net/5d8d67832db5757f2941c3cfe0ffd558.jpg?imageView&quality=75&thumbnail=750x0" alt="">
                </a>
              </div>
              <div class="swiper-slide">
                <a href="javascript:;">
                  <img src="https://yanxuan.nosdn.127.net/5d8d67832db5757f2941c3cfe0ffd558.jpg?imageView&quality=75&thumbnail=750x0" alt="">
                </a>
              </div>
              <div class="swiper-slide">
                <a href="javascript:;">
                  <img src="https://yanxuan.nosdn.127.net/5d8d67832db5757f2941c3cfe0ffd558.jpg?imageView&quality=75&thumbnail=750x0" alt="">
                </a>
              </div>
              <div class="swiper-slide">
                <a href="javascript:;">
                  <img src="https://yanxuan.nosdn.127.net/5d8d67832db5757f2941c3cfe0ffd558.jpg?imageView&quality=75&thumbnail=750x0" alt="">
                </a>
              </div>
              <div class="swiper-slide">
                <a href="javascript:;">
                  <img src="https://yanxuan.nosdn.127.net/5d8d67832db5757f2941c3cfe0ffd558.jpg?imageView&quality=75&thumbnail=750x0" alt="">
                </a>
              </div>
          </div>
          <!-- 如果需要分页器 -->
          <div class="swiper-pagination"></div>
        </div>
        <!-- 分割层 -->
        <div class="m-indexServicePolicy">
          <ul class="ServiceList">
            <li class="ServiceItem" v-for="(item,index) in homeData.policyDescList" :key="index">
              <a href="##">
                <img :src="item.icon" alt="">
                <span>{{item.desc}}</span>
              </a>
            </li>
          </ul>
        </div>
        <!-- 内容区 -->
        <div class="content">
          <!-- 第一层 -->
          <div class="m-kingKongModule">
            <ul class="m-kingKongList" v-if= "homeData.kingKongModule" >
              <li class="m-kingKongItem" v-for="(item,index) in homeData.kingKongModule.kingKongList" :key="index" >
                <a href="javascript:;">
                  <img :src="item.picUrl" alt="">
                  <span class="text">{{item.text}}</span>
                </a>
              </li>
            </ul>
            <div class="m-bossRecommendModule"> 
              <a href="javascript:;">
                <img src="https://yanxuan.nosdn.127.net/9e2248500f961bfe0e872027776b1e79.gif" alt="">
              </a>
            </div>
            <div class="m-sceneLightShoppingGuideModule">
              <ul class="m-sceneLightShoppingGuideList">
                <li class="m-sceneLightShoppingGuideItem" v-for="(item,index) in homeData.sceneLightShoppingGuideModule">
                  <a href="javascript:;" :style="{backgroundImage:`url(${item.styleItem.backgroundUrl})`}">
                    <div class="m-sceneLightShoppingGuideItemTop">
                      <p class="textTitle" :style="{color:`#${item.styleItem.titleColor}`}">{{item.styleItem.title}}</p>
                      <p  class="text" :style="{color:`#${item.styleItem.descColor}`}">{{item.styleItem.desc}}</p>
                    </div>
                    <div class="m-sceneLightShoppingGuideItemBottom">
                      <img :src="item.styleItem.picUrlList[0]" alt="">
                      <img :src="item.styleItem.picUrlList[1]" alt="">
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <!-- 私人订制 -->
          <div class="m-personalTailorModule">
            <div class="m-personalTailorModuleHeader">
              私人订制
            </div>
             <!-- 轮播图 -->
            <div class="swiper-container1">
              <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="(personalShops,index) in personalShopsArr" :key="index">
                  <a href="javascript:;" class="item" v-for= "(item,index) in personalShops" :key= "index" >
                    <div class="waper">
                      <img :src="item.listPicUrl" alt="">
                    </div>
                    <div class="name">
                      <span class="desc ">{{item.simpleDesc}}</span>
                      <span class="price">￥{{item.counterPrice}}</span>
                    </div>
                  </a>
                </div>     
              </div>
              <!-- 如果需要分页器 -->
              <div class="swiper-pagination1"></div>
            </div>
          </div>
          <!-- 限时购物 -->
          <div class="m-flashSaleModule">
            <div class="moduleTitle">
             <span class="text">限时购</span>
             <div class="time">
               <span class="hours">22</span>:
               <span class="minits">11</span>:
               <span class="secend">59</span>
               {{time|formatDate2()}}
             </div>
             <div class="more">
               <span>更多</span>
               <i class="iconfont icon-more"></i>
             </div>
            </div>
            <ul class="m-flashSaleModuleList" v-if="homeData.flashSaleModule">
              <li class="m-flashSaleModuleItem" v-for="(item,index) in homeData.flashSaleModule.itemList">
                <a href="javascript:;">
                  <img :src="item.picUrl" alt="">
                  <div class="money">
                    <span class="newMoney">￥{{item.activityPrice}}</span>
                    <span class="oldMoney">￥{{item.originPrice}}</span>
                  </div>
                </a>
              </li>
            </ul>
          </div>
          <!-- 新品首发 -->
          <div class="m-flashSaleModule">
            <div class="moduleTitle">
             <span class="text">新品发布</span>
             <div class="time1">
               
             </div>
             <div class="more">
               <span>更多</span>
               <i class="iconfont icon-more"></i>
             </div>
            </div>
            <ul class="m-flashSaleModuleList">
              <li class="m-flashSaleModuleItem" v-for="(item,index) in homeData.newItemList" :key="index">
                <a href="javascript:;">
                  <img :src="item.listPicUrl" alt="">
                  <div class="newItemModule">
                    <span class="title">{{item.simpleDesc}}</span>
                    <span class="prive">￥{{item.counterPrice}}</span>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  //引入 swiper相关组件
  import Swiper from 'swiper'
  import "swiper/dist/css/swiper.css"
  //引入 BScroll
  import BScroll from 'better-scroll'
  //引入 vuex获取状态数据的API
  import {mapState} from 'vuex'

  import Vue from 'vue'
  Vue.filter('formatDate2',(value,str)=>{
    return moment(value).format(str||'HH:mm:ss');
  })

  export default {
    data () {
      return {
        time:0,
        newIndex :0,
        navList:['推荐','居家用品','居家用品','居家用品','居家用品','居家用品','居家用品','居家用品','居家用品','居家用品','居家用品','居家用品'],
        isShow:false,//为true全部频道显示 横向导航隐藏
        // upOrDown:""
      }
    },
    computed:{
      ...mapState(['homeData']),
      /* 
        根据一维数组生成二维数组
        小数组长度为3

      */
      personalShopsArr(){
       
       let BigArr = []
       let smallArr = []
      
      const personalShop = this.homeData.personalShop
      // console.log(personalShop)
       //1.将小数组放到大数组中

       if (personalShop) {
          personalShop.forEach(c => {

           // 将小数组放入大数组(同一个小数组只能被保存一次)
          if(smallArr.length === 0){
            BigArr.push(smallArr)
          }
          //将分类对象放入小数组
          smallArr.push(c)
          // 如果满了, 重新准备一个新的小数组
          if(smallArr.length === 3){
            smallArr = []
          }

        });
       }
      //返回加过
       return BigArr

      }

    },
    async mounted(){
      
        await this.$store.dispatch('getHomeData')
        
       
          this.time = this.homeData.flashSaleModule.remainTime
          const timeId = setInterval(()=>{
            this.time--
            // if(this.time===0){
            //   clearInterval(timeId)
            // }
          },1000)

        new Swiper ('.swiper-container', {
          // direction: 'vertical', // 垂直切换选项
          loop: true, // 循环模式选项
          // 如果需要分页器
          pagination: {
            el: '.swiper-pagination',
          },
        
        })  

        new Swiper ('.swiper-container1', {
          // direction: 'vertical', // 垂直切换选项
          loop: true, // 循环模式选项
          // slidesPerView: 3,
          // spaceBetween: 30,
          // 如果需要分页器
          pagination: {
            el: '.swiper-pagination1',
          },
        
        })  
        
        // 水平滑动
        new BScroll('.scrollWaper', {
          click: true,
          scrollX: true, // 水平滑动
        })

        //主页竖向滑屏
        new BScroll('.homeScrollWaper', {
          click: true,
          
        })
    },
    watch: {
      // time(){
      //   this.nextTick(()=>{
      //      this.time = this.homeData.flashSaleModule.remainTime
      //       if(this.time >0){
      //         setTimeout(() => {
      //             this.time = this.time--
      //         }, 1000);
      //       }
      //       })
      // }
    },
    methods:{
       
        
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import '../../common/stylus/mixins.styl';
  #homeCantainer
    width 100%
    .homeHeader
      display flex
      align-items center
      padding 10px 20px
      position relative
      z-index 2
      background-color white
      h1
        .logo
          display block
          width 138px
          height 40px
          margin-right 10px
      .search
        width 450px
        margin-right 10px
        position relative
        input[type="text"]
          width 100%
          height 52px
          background-color #eee
          border-radius 5px
          outline-style none
          &::-webkit-input-placeholder
            text-align center
        .iconfont
          font-size 24px
          position absolute
          left 40px
          top 14px
      .login
        display block
        width 74px
        height 40px
        border 2px solid $red
        color $red
        text-align center
        line-height 40px
        border-radius 15%
        margin-left 10px
    .tabwrap
      width 100%
      height 60px
      right 0
      left 0
      padding 0 20px   
      position relative 
      background-color white
      z-index 2
      .scrollWaper
        width 600px
        height 60px  
        // background-color green
        .tabList
          white-space nowrap
          float left
          height 60px
          .tabItem
            height 60px
            line-height 60px
            padding 0 10px
            display inline
            font-size 0.37rem
            position relative
            box-sizing border-box 
            &.active
                border-bottom 4px solid $red
            a
              padding 0 10px 5px 10px
              
      .m-indexHd
        width 100%
        // height 600px
        background-color white
        position absolute
        top 0
        left 0
        &.withMask
          display none
        .tableter
          width 100%
          height 60px
          line-height 60px
          // background-color blue
          padding-left 30px
          font-size 0.42rem
          // color white
        .morecart
          .morecartList
            display flex
            flex-wrap wrap
            padding-top 24px
            >li
              width 148px
              height 54px
              line-height 54px
              border 1px solid #ccc
              border-radius 10px  
              margin 0px 0 40px 30px
              text-align center
              line-height 54px
              >a
                dispaly block
                width 148px
                height 54px
                color black
        .mask
          position absolute
          width 100%
          height 800px
          background-color rgba(0,0,0,0.6)
      .linear
        position absolute
        right 150px
        top 0
        width 120px
        height 60px
        background-image: linear-gradient(to right,rgba(255,255,255,0) 0,#fff 100%);
      .toggle
        width 150px
        height 60px
        line-height 60px
        // text-align center 
        background white
        position absolute
        right 0
        top 0
        z-index 20
        img
          // font-size 30px  
          margin-left 30px
          transform rotate(0deg)
          &.upRotate
            transform rotate(180deg)
            transition all .5s
          &.downRotate
            transform rotate(0deg)
            transition all .5s
    .homeScrollWaper
      height 1102px
      .homeScrollWaperList
        // height 5000px
        .swiper-container
          width 100%
          height 370px 
        .m-indexServicePolicy
          .ServiceList
            display flex
            justify-content space-around
            width 100%
            height 72px
            align-items center
            // background-color pink 
            box-sizing border-box
            padding 0 40px
            .ServiceItem
              font-size 0.32rem
              a
                display block
                color #000
                img 
                  width 32px
                  height 32px
                  vertical-align middle
                  margin-right 10px
                  >span 
                    vertical-align middle
                    font-size 0.32rem
        .content
          background-color $bc
          .m-kingKongModule
            .m-kingKongList 
              width 100%
              display flex 
              flex-wrap wrap
              background-color #ffffff
              .m-kingKongItem
                width 20%
                a
                  display flex
                  flex-direction column
                  align-items center
                  padding 10px
                  color #000
                  img 
                    width 110px
                    height 110px
                    margin-bottom 15px
          .m-bossRecommendModule
            a
              width 100%
              height 126.66px
              display block
              img 
                width 100%
                height 100% 
          .m-sceneLightShoppingGuideModule
            padding 10px 30px 35px 30px
            margin-bottom 20px
            background-color #fff
            .m-sceneLightShoppingGuideList
                display flex      
                flex-wrap: wrap           
                .m-sceneLightShoppingGuideItem
                  width 50%
                  box-sizing border-box
                  a
                    // width 100%
                    height 264px
                    display block
                    margin 4px
                    box-sizing border-box
                    padding 20px 0 0 20px
                   
                    .m-sceneLightShoppingGuideItemTop
                      .textTitle
                        font-size 0.42rem
                        margin-bottom 10px
                        color black 
                    .m-sceneLightShoppingGuideItemBottom
                      margin-top 10px
                      >img
                        width 150px   
                        header 150px
          .m-personalTailorModule
            .m-personalTailorModuleHeader
              width 100%
              height 100px
              padding  0px 30px
              font-size 0.5rem
              line-height 100px
              background-color white
            .swiper-container1
              width 100%
              height 310px
              // box-sizing border-box
              background-color white
              padding-bottom 50px
              // padding 0 0 0 60px
              // background-color red
              margin-bottom 30px
              .swiper-wrapper
                width 750px
                margin-left 40px
                .swiper-slide 
                  width 750px
                  text-align center
                  font-size 18px
                  background #fff
                  display flex
                  // Justify-content space-around
                  .item
                    width 28%
                    display block
                    margin-right 25px
                    
                    .waper
                      // background-color $bc
                      margin-bottom 30px
                      >img
                        width 100%
                        height 100%   
                        background-image url(https://yanxuan.nosdn.127.net/b143c18172b5433310ff1f2adf281792.png?imageView&thumbnail=343x264&quality=75)    
                    .name
                      margin-top: 0;
                      margin-bottom: .13333rem;
                      padding: 0 .13333rem;
                      font-size: .32rem;
                      overflow: visible;
                      white-space: normal;
                      line-height: .48rem;
                      .price
                        color $red
              .swiper-pagination-bullets
                text-align center
          .m-flashSaleModule
            width 100%
            background-color white
            margin-bottom 20px
            .moduleTitle
              width 100%
              height 100px
              // background-color pink
              display flex
              align-items center
              padding 0 30px
              .text
                font-size 0.53rem
              .time
                width 63%
                margin-left 16px
                margin-top 6px
                >span
                  width 40px
                  height 40px
                  background-color black
                  color white
                  border-radius 5px
              .time1
                width 60%
              .more
                font-size 0.4rem
                .iconfont
                  font-size 0.4rem
            .m-flashSaleModuleList
              display flex
              flex-wrap wrap
              // background-color pink
              padding-left 20px
              .m-flashSaleModuleItem
                width 33%
                padding-bottom 30px 
                a
                  display inline-block
                  width 100%
                  height 100% 
                  // background-color blue
                  img
                    width 216px
                    height 216px
                    background-color $bc
                  .money
                    font-size 0.36rem
                    margin-top 10px
                    .newMoney
                      color $red
                    .oldMoney
                       text-decoration line-through
                       margin-left 15px
                  .newItemModule
                    width 216px
                    font-size 0.32rem
                    .title
                      color black 
                    .prive
                      color red




               
                
                              
            


      
        



      

            
          

          


          

</style>

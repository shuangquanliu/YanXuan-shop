<template>
  <div id="displayCantainer" >
    <div v-show="$route.path === '/display/displaylist' && $route.fullPath === '/display/displaylist?id=0' " class="firstChild " >
      <div class="contentWaper" cancelable=false >
        <div class="tuijianList" >
          <div class="ad">
            <img v-if="tuijian[0]" :src="tuijian[0].ad.picUrl" alt="">
          </div>
          <div>
            <div v-for="(item,index) in tuijian" :key="index">
              <BigImg v-for="(a) in item.topics" :key="a.topicId" :big="a.type===0? a: {}"/>
              <SmallImg  v-for="(b) in item.topics" :key="b.nickName" :small="b.type===2? b: {}"/>
            </div >
          </div>
          <section v-for="(item,index) in arr" :key="index">
            <BigImg v-for="(c) in item.topics" :key="c.topicId" :big="c.type===0? c: {}"/>
            <SmallImg  v-for="(d) in item.topics" :key="d.avatar" :small="d.type===2? d: {}"/>
          </section>
        </div>
      </div>
    </div>
    <div v-show="$route.fullPath === '/display/displaylist?id=1'">好货内部价</div>
    <div v-show="$route.fullPath === '/display/displaylist?id=2'">回购帮</div>
    <div v-show="$route.fullPath === '/display/displaylist?id=3' ">晒晒</div>
    <div v-show="$route.fullPath === '/display/displaylist?id=4'">安抚ad</div>
  </div>
</template>

<script type="text/ecmascript-6">
  import  BigImg from '../../../components/BigImg/BigImg.vue'
  import SmallImg from '../../../components/SmallImg/SmallImg.vue'
  import {mapState} from 'vuex'
  import BScroll from 'better-scroll'
  
  export default {
      data () {
          return {
            index:'',
            page:1,
            size:5,
            arr:[]
          }
      },
      computed:{  
        ...mapState(['tuijian','list'])
        
      },
      components:{
        BigImg,
        SmallImg
      },
      mounted(){  
          if(this.arr.length>0){
              // this.setScroll()
              // this.arr.push(...this.list.result)
             
               
          }
          const {page,size} = this          
          this.$store.dispatch('gettujianData')
          this.$store.dispatch('getPageList',{page,size})
          // this.arr.concat(this.list.result)
          this.listArr = this.list.result
          this.index = this.$route.query.id*1 || 0
      },
      watch:{
        $route(val){
           this.index = val.query.id*1
           
        },
        tuijian(){
          this.$nextTick(()=>{
              new BScroll('.contentWaper',{
              click:true,
              scrollY:true,     
            })
            
          })
        },
        list(){
          this.$nextTick(()=>{
          // new BScroll('.contentWaper',{
          //     click:true,
          //     scrollY:true,
          //     //启用scroll事件
            
          //   })
            // this.arr.push(...this.list.result)
            this.setScroll()
            this.arr.push(...this.list.result)
          })
        }
      },
      methods:{
        //m默认的滑动
        setScrollInit(){

        },
        init(page,size){
         this.$store.dispatch('getPageList',{page,size})
        },  
        setScroll(){     
          if(this.BScroll){
            this.BScroll.refresh()
          } else {
            this.BScroll = new BScroll('.contentWaper',{
              click:true,
              scrollY:true,
              //启用scroll事件
              probeType:1
            })
          }
          let flag = true
          this.BScroll.on('scrollEnd',({y})=>{
                
              if(this.BScroll.maxScrollY === y){   
                // alert('加载更多')
                // let flag = true
               if(flag){
                  this.page++
                  console.log(this.page)
                 flag = false
                 this.init(this.page,5)
                 setTimeout(()=>{   
                  let flag = true
                },3000)
               }
              }
          })
        }
        
      }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

#displayCantainer
  width 100%
  // height 1050px
  background-color #eee
  .firstChild
    // display none
    $.active
      display block
    .contentWaper
      width 100%
      height 1050px
      .tuijianList
        .ad
          width 100%
          height 500px
          img 
            width 100%
            height 500px 
 
</style>

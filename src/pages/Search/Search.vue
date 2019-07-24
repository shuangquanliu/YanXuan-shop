<template>
  <div id="searchCantainer">
      <header class="header">
        <div class="serchWaper">
          <i class="iconfont icon-sousuo"></i>
          <input type="serch" placeholder="扫拖两用机器人" v-model="keyWord" @keypress="searchGoods">
        </div>
        <span class="cancel" @click="$router.back()">取消</span>
      </header> 
      <div v-show="keyWord" class="keyWordWaper">
        <ul class="keyWordList">
          <li class="keyWordListItem" v-for="(item,index) in serchKeyWord " :key="index">{{item}}</li>
        </ul>
      </div>
      <div class="hotserch" v-show="!keyWord">
        <h3 class="title">热门搜索</h3>
        <ul class="hotList">
          <li class="listItem" v-for="(item,index) in hotKeyList.hotKeywordVOList" :key="index">{{item.keyword}}</li>
        </ul>
      </div>
  </div>
</template>

<script type="text/ecmascript-6">
import  {mapState} from 'vuex'

export default {
  data () {
    return {
      keyWord:''
    }
  },
  computed:{
    ...mapState(['hotKeyList','serchKeyWord'])
  },
  watch:{
    keyWord(val){
      //  this.$store.dispatch('getSearchKeyWords',val)
        clearTimeout(this.timeId)   
       this.timeId=setTimeout(()=>{ 
        //clearTimeout(this.timeId)   
        this.$store.dispatch('getSearchKeyWords',val)
      },500) 
      
    }
  },
  mounted(){
    this.$store.dispatch('getHotKeyList')
    
  },
  methods:{
    searchGoods(event){
      if (event.keyCode == 13) { //如果按的是enter键 13是enter 
          event.preventDefault(); //禁止默认事件（默认是换行） 
               
      } 
    }
  }

};
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  #searchCantainer
    width 100%
    height 88px
    // background-color pink
    padding 0 30px
    box-sizing border-box
    .header
      display flex
      justify-content space-between
      align-items center
      line-height 88px
      .serchWaper
        width 604px
        height 56px
        background #eeeeee
        text-align center
        line-height 56px
        position relative
        input[type="serch"]
          width 520px
          height 39px
          background-color #eeeeee
          font-size 0.38rem
          outline none
        .iconfont
          position absolute
          left 10px
          top 0
          font-size 0.4rem
      .cancel
        font-size 0.4rem
    .keyWordWaper
      .keyWordList
        .keyWordListItem
          font-size 0.42rem 
          height 80px
          line-height 80px
          width 100%
          border-bottom  1px solid #cccccc
    .hotserch
      margin-top 20px
      padding 0 30px 30px 30px
      .title
        font-size 0.4rem
        color #ccc
        margin 30px 0 
      .hotList
        display flex
        flex-wrap wrap
        .listItem
          border 1px solid #cccccc
          padding 10px 20px
          margin 20px 20px 20px 0
          font-size 0.32rem
</style>


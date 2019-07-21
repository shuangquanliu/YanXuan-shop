<template>
  <div id="loginCantainer">
    <div class="header border-1px">
      <i class="iconfont icon-shouye" @click="$router.push('/home')"></i>
     <div class="middle">
        <img src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-a90bdaae6b.png" alt="">
     </div>
      <div class="right">
        <i class="iconfont icon-sousuo"></i>
        <i class="iconfont icon-gouwuche"></i>
      </div>
    </div>
    <!-- 登录首页 -->
    <div class="m-loginTypes" :class="{hide:!isShow}">
      <div class="logo">
        <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="">
      </div>
      <div class="m-loginTypesBtns">
        <div class="modleType active" @click="gotoMessage">
          <i class="iconfont icon-weixin"></i>
          <span >手机号码登录</span>
        </div>
        <div class="emailType" @click="gotoEmail">
          <i class="iconfont icon-qq"></i>
          <span >邮箱账号登录</span>
        </div>
        <div class="more">
          <a href="javascript:;">手机号快捷注册</a>
          <i class="iconfont icon-more"></i>
        </div>
      </div>
      <div class="m-loginTypeBottom">
        <div class="left">
          <i class="iconfont icon-weixin"></i>
          <span>微信</span>
        </div>
        <div class="middle">
          <i class="iconfont icon-qq"></i>
          <span>Q Q</span>
        </div>
        <div class="right">
          <i class="iconfont icon-weibo"></i>
          <span>微博</span>
        </div>
      </div>
    </div>
    <!-- 两种登录方式 -->
    <div class="loginWrap">
      <div class="view" :class="{active:!isShow}">
        <!-- 上面logo -->
        <div class="logo">
          <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="">
        </div>
        <!-- 手机号登录 -->
        <div class="item " :class="{active:isShowMessage}">
          <section class="login_message">
            <input type="text" placeholder="请输入手机号">
            <span class="clear">X</span>
          </section>
          <section class="login_verification">
            <input type="text" maxlength="8" placeholder="请输入验证码">
            <a class="verificationBtn">获取验证码</a>
          </section>
          <section class="bottom">
            <span>遇到问题</span>
            <span>使用密码验证登录</span>
          </section>
        </div>
        <!-- 密码登录 -->
        <div class="item " :class="{active:!isShowMessage}"> 
          <section class="login_message">
            <input type="text" placeholder="邮箱账号">
            <span class="clear">X</span>
          </section>
          <section class="login_verification">
            <input type="text" maxlength="8" placeholder="密码">
            <!-- <a class="verificationBtn">获取验证码</a> -->
          </section>
          <section class="bottom">
            <span>注册账号</span>
            <span>忘记密码</span>
          </section>
        </div>
        <!-- 提交 发请求登录 -->
        <div class="loginBtns">
          <div class="login on">
            <span>登录</span>
          </div>
          <div class="otherlogin" @click="gotoTypes">
            <span>其他方式登录</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data () {
      return {
        isShow:true,//是否显示登录方式页面 true显示 false 不显示
        isShowMessage:false, //当为true时候 显示手机登录 false 为邮箱登录
      }
    },
    methods:{
      //回到登录类型页面
      gotoTypes(){
        this.isShow = true
      },
      //去手机登录
      gotoMessage(){
        this.isShow = false
        this.isShowMessage = true
      },
      //区邮箱登录
      gotoEmail(){
        this.isShow = false
        this.isShowMessage = false
      },
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import '../../common/stylus/mixins.styl';
  #loginCantainer
    height 100%
    // background-color #F2F5F4
    .header
      bottom-border-1px(black)
      height 88px
      box-sizing border-box
      padding 0 30px
      // background-color pink 
      display flex
      align-items center
      justify-content space-around
      .icon-shouye
        font-size 0.7rem
      .middle
        width 80%
        text-align center
      .right 
        .iconfont
          font-size 0.7rem 
        .icon-sousuo
          margin-right 30px
    .m-loginTypes
      width 100%
      // height 100%
      display block
      &.hide
        display none 
      .logo
        width 100%
        padding-top 120px
        padding-bottom 120px
        text-align center
        // background-color pink 
        img 
          width 170px
          height 60px
      .m-loginTypesBtns
        margin-top 50px
        padding 0 40px
        color $red
        font-size 0.5rem
        text-align center
        .modleType
          width 100%
          height 80px
          line-height 80px
          border 1px solid $red
          margin-bottom 50px
          &.active
            color white
            background-color $red
          .iconfont
            font-size 40px
        .emailType
          width 100%
          height 80px
          line-height 80px
          border 1px solid $red
          margin-bottom 50px
          &.active
            color white
            background-color $red
          .iconfont
            font-size 40px
        .more
          color black
          font-size 30px
          .iconfont
            font-size 30px
          a
            color black
      .m-loginTypeBottom
        margin-top 400px
        width 100%
        display flex 
        // justify-content space-between
        justify-content center
        font-size 30px
        >div
          width 25% 
          text-align center 
          .iconfont
            font-size 30px
            margin-right 10px 
        .middle
          border-left  1px solid black 
          border-right  1px solid  black 
    .loginWrap
      .view
        width 100%
        display none 
        &.active
            display block
        .logo
          text-align center
          margin 120px 0
          img 
            width 188px
            height 64px
        .item
          padding 0 60px
          display none 
          &.active
            display block
          .login_message
            width 100%
            height 96px
            margin-top 40px
            position relative
            >input 
              width 100%
              height 80px
              border-bottom 1px solid black 
              font-size 30px
              outline none
              // background-color pink 
            >span 
              position absolute
              right 30px
              top 30%
          .login_verification
            width 100%
            height 96px
            margin-top 40px
            position relative
            >input 
              width 100%
              height 80px
              border-bottom 1px solid black 
              font-size 30px
              outline none
              // background-color pink 
            .verificationBtn
              width 140px
              height 50px
              text-align center
              line-height 50px
              border-radius 10px
              border 1px solid black 
              position absolute
              top 10px
              right 0
          .bottom
            display flex
            justify-content space-between 
            margin-bottom  50px  
        .loginBtns
          width 80%  
          margin 0 auto
          font-size 30px
          .login
            width 100%
            height 80px
            border 1px solid $red
            color $red
            margin-bottom 50px
            text-align center
            line-height 80px
            &.on
              background-color $red
              color white
          .otherlogin
            width 100%
            height 80px
            border 1px solid $red
            color $red
            margin-bottom 50px
            text-align center
            line-height 80px















</style>

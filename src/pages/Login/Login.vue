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
    <div class="m-loginTypes" :class="{hide:!isShow || !isRegister}">
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
          <a href="javascript:;" @click=" isRegister = false">手机号快捷注册</a>
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
        <!-- 手机号-验证码登录 -->
        <div class="item " :class="{active:isShowMessage && !isModlupwd}" >
          <section class="login_message">
            <input type="text" placeholder="请输入手机号" maxlength="11" v-model="phone" ref="PhoneNumber" autocomplete="off">
            <span class="clear" v-show="phone" @click="$refs.PhoneNumber.value=''">X</span>
          </section>
          <section class="login_verification">
            <input type="text" placeholder="请输入验证码">
            <button :disabled="!isRightNum" class="verificationBtn" :class="{right_phone_number:isRightNum}" @click="sendCode">获取验证码</button>
          </section>
          <section class="bottom">
            <span>遇到问题</span>
            <span @click="isModlupwd=true">使用密码验证登录</span>
          </section>
        </div>
        <!-- 手机号-密码登录 -->
        <div class="item "  :class="{active:isShowMessage &&isModlupwd}">
          <section class="login_message">
            <input type="text" placeholder="请输入手机号" maxlength="11" v-model="phone" ref="PhoneNumber1" autocomplete="off">
            <span class="clear" v-show="phone" @click="$refs.PhoneNumber1.value=''" >X</span>
          </section>
          <section class="login_verification">
            <input type="text" maxlength="8" placeholder="请输入手机密码码">
            <!-- <a class="verificationBtn">获取验证码</a> -->
          </section>
          <section class="bottom">
            <span>忘记密码？</span>
            <span @click="isModlupwd=false">使用验证码登录</span>
          </section>
        </div>
        <!-- 邮箱密码登录 -->
        <div class="item " :class="{active:!isShowMessage}"> 
          <section class="login_message">
            <input type="text" placeholder="邮箱账号" v-model="email" ref="emailNumber" autocomplete="off">
            <span class="clear" @click="$refs.emailNumber.value= ''" >X</span>
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
          <div class="login on" @click="login_jump">
            <span >登录</span>
          </div>
          <div class="otherlogin" @click="isShow = true">
            <span>其他方式登录</span>
          </div>
        </div>
      </div>
    </div>
    <!-- 手机号注册 -->
    <div class="registerCantainer" v-show="!isRegister">
      <div class="headerd">
        <p>手机号注册</p>
      </div>
      <div class='m-container'>
        <section class="register_Moudle">
          <input type="text" placeholder="请输入手机号" maxlength="11" v-model="phone">
          <span class="clear_Moble">X</span>
        </section>
        <section class="register_YZM">
          <input type="text" placeholder="请输入验证码">
          <button class="req_YZM">获取验证码</button>
        </section>
        <section class="register_Pwd">
          <input type="password" placeholder="请输入手机密码" maxlength="8">
        </section>
        <section class="register_Pwd">
          <button class="register_Btn">注册</button>
        </section>
        <section class="lsq_agree">
           <input type="checkbox" placeholder="请输入验证码" class="zc-un-login">
           <span>我同意</span>
           <span>服务条款</span>
           <span>和</span>
           <span>网易隐私政策</span>
        </section>
        <section class="gotoEmail_register"> 
          <span @click="$router.replace('/email')">邮箱账号注册</span>
          <i class="iconfont icon-more"></i>
        </section>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import { Toast } from 'mint-ui'
  export default {
    data () {
      return {
        isShow:true,//是否显示登录方式页面 true显示 false 不显示
        isShowMessage:false, //当为true时候 显示手机登录 false 为邮箱登录
        isModlupwd:false,//默认验证码登录 ，true 为手机密码登录
        isRegister:true ,//默认手机号注册 false 为邮箱注册
        phone:'', //前端验证手机号
        email:''
      }
    },
    watch:{
      phone(val){
        return val
      },
      email(val){
        return val
      },
    },
    mounted(){
      this.$refs.PhoneNumber.value=''
      this.$refs.emailNumber.value=''
    },
    computed:{
      isRightNum(){
        return /^1[3456789]\d{9}$/.test(this.phone)
      },
      isRightEmall(){
        return /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(this.emal)
      }
    },
    methods:{
      login_jump(){
        if(this.isRightNum || this.isRightEmall){
          Toast('登录成功')
        } else {
          Toast('用户名或账号做粗')
        }
      },
      sendCode(){
        Toast(this.isRightEmall)
      },
      //去手机验证码登录
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
              background-color white
              font-size 0.32rem
              outline-style none
              color #cccccc
              &.right_phone_number
                color black
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
    .registerCantainer
      margin-top 30px
      .headerd
        text-align center
        p
          font-size 0.52rem
      .m-container
        margin-top 200px
        width 100%
        box-sizing border-box
        padding 0 30px
        // background-color pink 
        display flex
        flex-direction column
        align-items center
        >section 
          width 100%
          position relative
          margin-top 30px
          >input
            width 100%
            height 87px
            font-size 0.42rem
            outline-style none
            border-bottom 1px solid #cccccc
          .clear_Moble
            position absolute
            right 20px
            top 25px
            font-size 0.42rem
          .req_YZM
            position absolute
            right 20px
            top 10px
            font-size .42rem
            padding 10px 20px
            border 1px solid #ccc
            border-radius 10px
            background-color white
          .register_Btn
            width 100%
            height 84px
            background-color red
            border none
            font-size 0.42rem
            color white
        .lsq_agree
          >input 
            width 20px 
            height 20px
            margin-right 20px
          >span 
            margin-right 10px
            &:nth-child(2n+1)
              color blue
        .gotoEmail_register
          margin-top 80px
          text-align center
          .iconfont
            font-size 0.42rem










</style>

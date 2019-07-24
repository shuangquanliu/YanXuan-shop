<template>
  <div id="EmailRegisterCantainer">
    <section>
      <input type="text" placeholder="6-18为数字组合">  
      <select name="" id="">
        <option value="">@126.com</option>
        <option value="">@136.com</option>
        <option value="">@146.com</option>
      </select>
    </section>
    <section>
      <input type="password" placeholder="6-16位字母数字字符组合密码">
    </section>
    <section class="yanzheng">
      点击进行验证
      <i class="iconfont icon-sanjiaoxing"></i> 
    </section>
    <section class="bottom">
      <div class="btn">下一步</div>
      <input type="checkbox" placeholder="请输入验证码" class="zc-un-login">
      <span>我同意</span>
      <span>服务条款</span>
      <span>和</span>
      <span>网易隐私政策</span>
    </section>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
#EmailRegisterCantainer
  display  flex
  flex-direction column
  align-items center
  // background-color pink
  box-sizing border-box
  padding 100px 30px  0 30px
  >section 
    width 100%
    height 80px
    margin-bottom 60px
    line-height 80px
    >input 
      width 100%
      height 100% 
      border 1px solid #cccccc
      font-size 0.42rem
      outline-style none
    input[type="text"]
      width 420px
      margin-right 20px
    select
      width 240px
      height 80px
      outline-style none 
      margin-bottom -3px
      font-size 0.42rem
  .yanzheng
    width 100%
    height 80px
    background-color #eeeeee  
    text-align center  
    .iconfont
      font-size 0.42rem
  .bottom
    .btn
      width 100%
      height 80px
      background-color red
      text-align center 
      color white
      border-radius 10px
      font-size 0.42rem
    >input 
      width 20px 
      height 20px
      margin-right 20px
    >span 
      margin-right 10px
      &:nth-child(2n)
        color blue
 


</style>

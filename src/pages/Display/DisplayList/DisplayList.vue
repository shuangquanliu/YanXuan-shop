<template>
  <div>
      <div v-if="index === 0 ">推荐</div>
      <div v-if="index === 1 ">好货内部价</div>
      <div v-if="index === 2 ">回购帮</div>
      <div v-if="index === 3 ">晒晒</div>
      <div v-if="index === 4 ">安抚ad</div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
      data () {
          return {
            index:''
          }
      },
      mounted(){
           
          this.index = this.$route.query.id*1 || 0
      },
      watch:{
        $route(val){
           this.index = val.query.id*1
        }
      }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

 
</style>

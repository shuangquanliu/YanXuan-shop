<template>
  <div>
    <Footer/>
    <router-view/>
  </div>  
</template>

<script type="text/ecmascript-6">
  import Footer from './components/Footer/Footer.vue'
  export default {
    components:{
      Footer
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
 
</style>

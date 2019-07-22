<template>
  <div id="displayContainer">
    <div class="header border-1px">
      <i class="iconfont icon-shouye" @click="$router.push('/home')"></i>
      <div class="middle">
        <a @click="isShowDiscover = true" :class="{active:isShowDiscover}">发现</a>
        <a @click="isShowDiscover = false" :class="{active:!isShowDiscover}">臻选家</a>
      </div>
      <div class="right">
        <i class="iconfont icon-sousuo"></i>
        <i class="iconfont icon-gouwuche"></i>
      </div>
    </div>
    <!-- <router-view /> -->
    <Discover v-if="isShowDiscover"/>
    <Encumbered v-if="!isShowDiscover"/>
  </div>
</template>

<script type="text/ecmascript-6">
import BScroll from "better-scroll";
import Discover from '../../components/Discover/Discover.vue'
import Encumbered from '../../components/Encumbered/Encumbered'
export default {
  data() {
    return {
      isShowDiscover:true,//当为true显示发现 false显示臻选家
    };
  },
  components:{
    Discover,
    Encumbered
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
@import '../../common/stylus/mixins.styl';

#displayContainer {
  // background-color #F2F5F4
  height 1334px
  position relative
  z-index 10
  .header {
    position relative
    z-index 10
    bottom-border-1px(black);
    height: 88px;
    box-sizing: border-box;
    padding: 0 30px;
    background-color white
    display: flex;
    align-items: center;
    justify-content: space-around;

    .icon-shouye {
      font-size: 0.7rem;
    }

    .middle {
      width: 70%;
      font-size: 0.42rem;
      text-align: center;
      display: flex;
      align-items: center;
      justify-content: center;

      a {
        display: block;
        margin-left: 20px;

        &.active {
          color: $red;
          font-size: 43px;
          font-weight: bold;
        }
      }
    }

    .right {
      .iconfont {
        font-size: 0.7rem;
      }

      .icon-sousuo {
        margin-right: 30px;
      }
    }
  }
}
</style>

<template>
  <div class="header">
    <cube-loading v-if="loading"></cube-loading>
    <template v-if="!loading">
      <div class="header-content">
        <div class="content-left">
          <img class="avatar" :src="sellerData.avatar" @error="sellerData.avatar=imgError" alt>
        </div>
        <div class="content-right">
          <h3 class="title">
            <img :src="BrandPic" alt>
            {{sellerData.name}}
          </h3>
          <p class="deliver">{{sellerData.description}}/{{sellerData.deliveryTime}}分钟送达</p>
          <p class="full-cut" v-if="sellerData.supports">
            <img-icon class="cut-icon"></img-icon>
            {{sellerData.supports[0].description}}
          </p>
        </div>
        <div class="supports-number" v-if="sellerData.supports" @click="modalVisible=true">
          <span>{{sellerData.supports.length}}个</span>
          <base-icon class="icon-right" icon="right"></base-icon>
        </div>
      </div>
      <div class="header-bottom">
        <span class="bulletin">
          <img :src="BulletinPic" alt>
        </span>
        <span class="bulletin-text">{{sellerData.bulletin}}</span>
        <base-icon class="icon-right" icon="right" @click="modalVisible=true"></base-icon>
      </div>
      <div class="background">
        <img :src="sellerData.avatar" alt>
      </div>
      <!-- <transition name="scale"> -->
      <v-notice :sellerData="sellerData" v-if="modalVisible" :modalVisible.sync="modalVisible"></v-notice>
      <!-- </transition> -->
    </template>
  </div>
</template>

<script>
import { fetchSeller } from "api/data";
import ImgIcon from "components/imgIcon";
import BaseIcon from "components/baseIcon";
import VNotice from "./components/notice";
import BrandPic from "img/brand@2x.png";
import imgError from "img/imgError.jpg";
import BulletinPic from "img/bulletin@2x.png";
import { TOGGLE_LOADING } from "./store/mutationType.js";
// mapState(namespace?: string, map: Array<string> | Object<string | function>): Object)
// 参数一：namespace: 一个可选的字符串,
// 参数二： 对象或数组
//        map: 字符串组成的数组
//        Object: 对象的属性值时字符串或者函数
import { mapState, mapMutations } from "vuex";
export default {
  name: "VHeader",
  data() {
    return {
      sellerData: {},
      modalVisible: false,
      BrandPic,
      BulletinPic,
      imgError
    };
  },
  computed: {
    ...mapState({ loading: ({ header }) => header.loading })
  },
  mounted() {
    this.getSellerData();
  },
  methods: {
    ...mapMutations([TOGGLE_LOADING]),
    getSellerData() {
      this.TOGGLE_LOADING(true);
      fetchSeller().then(res => {
        this.sellerData = res.seller;
        this.TOGGLE_LOADING(false);
      });
    }
  },
  components: { ImgIcon, BaseIcon, VNotice }
};
</script>

<style lang="less" scoped>
.header {
  position: relative;
  padding-top: 1px;
  height: 2.68rem;
  background-color: @header-bg-color;
  color: #fff;
  .scale-enter-active {
    animation: scale 0.5s;
  }
  .scale-leave-active {
    animation: scale 0.5s reverse;
  }
  @keyframes scale {
    0% {
      transform: scale(0);
    }
    50% {
      transform: scale(1.3);
    }
    100% {
      transform: scale(1);
    }
  }
  .header-content {
    position: relative;
    margin-top: 0.48rem;
    margin-left: 0.48rem;
    display: flex;
  }
  .content-left {
    width: 1.28rem;
    height: 1.28rem;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .content-right {
    margin-left: 0.32rem;
  }
  .title {
    display: flex;
    margin-top: 0.04rem;
    font-size: 16px;
    line-height: 0.36rem;
    img {
      width: 0.6rem;
      height: 0.36rem;
      margin-right: 0.12rem;
    }
  }
  .deliver {
    font-size: 14px;
    margin-top: 0.16rem;
  }
  .full-cut {
    display: flex;
    align-items: center;
    font-size: 12px;
    margin-top: 0.2rem;
    > .cut-icon {
      margin-right: 0.08rem;
    }
  }
  .supports-number {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    right: 0.24rem;
    bottom: -0.12rem;
    background-color: rgba(0, 0, 0, 0.2);
    font-size: 12px;
    width: 0.8rem;
    height: 0.48rem;
    border-radius: 0.16rem;
  }
  .header-bottom {
    padding: 0 0.24rem;
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    min-width: 0;
    height: 0.56rem;
    background-color: rgba(7, 17, 27, 0.2);
    display: flex;
    align-items: center;
  }
  .bulletin {
    display: inline-block;
    height: 0.3rem;
    width: 0.5rem;
    margin-right: 0.08rem;
    > img {
      width: 100%;
      height: 100%;
    }
  }
  .bulletin-text {
    .ell();
    font-size: 12px;
    flex: 1;
    min-width: 0; // 加这行才能正常显示...
  }
  .icon-right {
    font-size: 12px;
  }
  .background {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    > img {
      width: 100%;
      height: 100%;
    }
    filter: blur(10px);
    z-index: -1;
  }
}
</style>
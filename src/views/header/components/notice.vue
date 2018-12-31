<template>
  <div class="modal-wrapper" @click="$emit('update:modalVisible', false)">
    <div class="modal">
      <div class="modal-content">
        <div class="content-top">
          <div class="title">
            <h3>{{sellerData.name}}</h3>
          </div>
          <div class="rating-wrapper">
            <!-- <rating :score="sellerData.foodScore"></rating> -->
          </div>
        </div>
        <div class="content-middle">
          <div class="favourable">
            <div class="content-title">
              <div class="title-left">
                <p class="line"></p>
              </div>
              <div class="title-text">优惠信息</div>
              <div class="title-right">
                <p class="line"></p>
              </div>
            </div>
            <div class="content-list">
              <ul>
                <li class="list-item" v-for="(item,index) in sellerData.supports" :key="index">
                  <img-icon class="mr" :size="32" :type="item.type"></img-icon>
                  <p>{{item.description}}</p>
                </li>
              </ul>
            </div>
          </div>
          <div class="notice">
            <div class="content-title">
              <div class="title-left">
                <p class="line"></p>
              </div>
              <div class="title-text">商家公告</div>
              <div class="title-right">
                <p class="line"></p>
              </div>
            </div>
            <div class="content-list">
              <p class="introduce">{{sellerData.bulletin}}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="content-bottom">
        <p class="close">
          <base-icon @click="$emit('update:modalVisible', false)" class="close-icon" icon="close"></base-icon>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import BaseIcon from "components/baseIcon";
import ImgIcon from "components/imgIcon";
export default {
  name: "VNotice",
  props: {
    sellerData: {
      type: Object,
      default() {
        // 对象或数组默认值必须从一个工厂函数获取
        return {};
      }
    }
  },
  data() {
    return {};
  },
  components: { BaseIcon, ImgIcon }
};
</script>

<style lang="less" scoped>
.modal-wrapper {
  position: absolute;
  left: 0;
  top: 0;
  height: 100vh;
  width: 100%;
  z-index: 99;
  /*为一个元素后面区域添加图形效果，实现功能，只有在IOS上可以正常使用*/
  backdrop-filter: blur(10px);
  .modal {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    width: 100%;
    background-color: rgba(7, 17, 27, 0.8);
    /*overflow: visible;(默认值，内容不会被修剪，会呈现在元素框之外)*/
    overflow: scroll;
    .modal-content {
      flex: 1;
      padding: 1.28rem 0.72rem 0;
    }
    .close {
      text-align: center;
    }
    .title {
      h3 {
        text-align: center;
        font-weight: 700;
        font-size: 16px;
      }
    }
    .rating-wrapper {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 0.56rem;
      margin-top: 0.32rem;
    }
    .close-icon {
      color: rgba(255, 255, 255, 0.5);
      font-size: 32px;
    }
    .content-title {
      display: flex;
      .title-left,
      .title-right {
        width: 2.24rem;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .title-text {
        flex: 1;
        text-align: center;
        font-weight: 700;
      }
      .line {
        width: 100%;
        height: 2px;
        background-color: rgba(255, 255, 255, 0.2);
      }
    }
    .content-list {
      font-weight: 200;
      padding: 0.48rem 0.24rem 0.56rem;
      .introduce {
        line-height: 0.48rem;
      }
    }
    .list-item {
      display: flex;
      font-size: 12px;
      align-items: center;
      &:not(:first-child) {
        margin-top: 0.24rem;
      }
      img {
        width: 0.32rem;
        height: 0.32rem;
        margin-right: 0.12rem;
      }
    }
    .content-bottom {
      margin-bottom: 0.64rem;
    }
  }
}
</style>
<template>
  <div class="img-icon" :class="`${imgArray[type]}-${size}`"></div>
</template>

<script>
export default {
  name: "ImgIcon",
  props: {
    // 尺寸，支持24和32
    size: {
      type: Number,
      default: 24,
      validator: size => {
        return [24, 32].includes(size);
      }
    },
    type: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      imgArray: ["decrease", "discount", "special", "invoice", "guarantee"]
    };
  }
};
</script>

<style lang="less" scoped>
.img-icon {
  display: inline-block;
}
// 如果你想要创建一个混合集，但是却不想让它输出到你的样式中，你可以在混合器的名字后面加上一个括号
.img-size-24() {
  width: 0.24rem;
  height: 0.24rem;
  background-size: 100% 100%;
}
.img-size-32() {
  width: 0.32rem;
  height: 0.32rem;
  background-size: 100% 100%;
}
.decrease-24 {
  background: url("~img/decrease_1@2x.png");
  .img-size-24;
}
.discount-24 {
  background: url("~img/discount_1@2x.png");
  .img-size-24;
}
.special-24 {
  background: url("~img/special_1@2x.png");
  .img-size-24;
}
.invoice-24 {
  background: url("~img/invoice_1@2x.png");
  .img-size-24;
}
.guarantee-24 {
  background: url("~img/guarantee_1@2x.png");
  .img-size-24;
}
.decrease-32 {
  background: url("~img/decrease_2@2x.png");
  .img-size-32;
}
.discount-32 {
  background: url("~img/discount_2@2x.png");
  .img-size-32;
}
.special-32 {
  background: url("~img/special_2@2x.png");
  .img-size-32;
}
.invoice-32 {
  background: url("~img/invoice_2@2x.png");
  .img-size-32;
}
.guarantee-32 {
  background: url("~img/guarantee_2@2x.png");
  .img-size-32;
}
</style>
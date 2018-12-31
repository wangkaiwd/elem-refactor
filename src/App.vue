<template>
  <div id="app">
    <cube-button :primary="true">测试按钮</cube-button>
    <div class="test-button">rem测试342</div>
  </div>
</template>
<script>
import { fetchDemo } from "api/data";
export default {
  data() {
    return {};
  },
  mounted() {
    this.demoData();
  },
  methods: {
    demoData() {
      fetchDemo().then(res => console.log(res));
    }
  }
};
</script>

<style lang="less">
.test-button {
  background-color: @blue;
  height: 0.8rem;
}
</style>

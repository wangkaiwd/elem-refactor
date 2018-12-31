<template>
  <div id="app">
    <v-header></v-header>
  </div>
</template>
<script>
import VHeader from "views/header";
export default {
  data() {
    return {};
  },
  mounted() {},
  methods: {},
  components: { VHeader }
};
</script>

<style lang="less">
.test-button {
  background-color: @blue;
  height: 0.8rem;
}
</style>

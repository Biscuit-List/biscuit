<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import LandingPage from "./views/LandingPage/LandingPage.vue";
import BucketListPage from "./views/BucketListPage/BucketListPage.vue";

@Component({
  components: {
    LandingPage,
    BucketListPage
  }
})
export default class App extends Vue {}
</script>

<style lang="scss">
@import url("./style.scss");
</style>

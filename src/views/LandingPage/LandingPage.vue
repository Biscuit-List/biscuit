<template>
  <div class="landing-page">
    <span class="main-title">Biscuit</span>

    <div>
      <img class="img-container" src="../../assets/character/unit-group1.png" />
      <img class="img-container" src="../../assets/character/unit-group2.png" />
      <img class="img-container" src="../../assets/character/unit-group3.png" />
    </div>

    <button id="go-to-bucket-list-btn" v-on:click="goToBucketList">
      start
    </button>
  </div>
</template>

<script lang="ts">
import router from "@/router";
import { Component, Vue } from "vue-property-decorator";

@Component({})
export default class AppBarComponent extends Vue {
  index = 0;
  mounted() {
    this.slideShow();
  }
  slideShow() {
    let i,
      x: any = document.getElementsByClassName("img-container");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    this.index++;
    if (this.index > x.length) {
      this.index = 1;
    }
    x[this.index - 1].style.display = "block";
    setTimeout(this.slideShow, 4500);
  }

  goToBucketList(): void {
    router.push({ path: "/bucket-list" });
  }
}
</script>
<style lang="scss" src="./components/LandingPage.scss"></style>

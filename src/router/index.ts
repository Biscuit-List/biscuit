import LandingPage from "../views/LandingPage/LandingPage.vue";
import BucketListPage from "../views/BucketListPage/BucketListPage.vue";

import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "LandingPage",
      component: LandingPage
    },
    {
      path: "/bucket-list",
      name: "BucketListPage",
      component: BucketListPage
    }
  ]
});

export default router;

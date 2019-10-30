import Vue from "vue";
import VueRouter from "vue-router";
import TermPlans from "../components/TermPlans.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "TermPlans",
    component: TermPlans
  },
  {
    path: "/allplans",
    name: "TermDetails",
    // route level code-splitting
    // this generates a separate chunk (TermDetails.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "TermDetails" */ "../components/TermDetails.vue"
      )
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;

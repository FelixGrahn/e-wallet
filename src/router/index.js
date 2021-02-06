import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Test from "../views/HomeSecondEdition.vue";
import CredCard2 from "../views/CreditCard2Front.vue";



Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/Test",
    namn: "Test",
    component: Test
  },
  {
    path: "/CreditCard",
    name: "CreditCard",
    component: CredCard2
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;

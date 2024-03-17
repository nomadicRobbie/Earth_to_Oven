import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: () => import("@/views/AboutView.vue"),
  },
  {
    path: "/hireUs",
    name: "hireUs",
    component: () => import("@/views/HireUsView.vue"),
  },
  {
    path: "/shop",
    name: "shop",
    component: () => import("@/views/ShopView.vue"),
  },
  {
    path: "/tsAndCs",
    name: "tsAndCs",
    component: () => import("@/views/TsandCs.vue"),
  },
  {
    path: "/PrivacyPolicy",
    name: "PrivacyPolicy",
    component: () => import("@/views/PrivacyPolicy.vue"),
  },
  {
    path: "/basket",
    name: "basket",
    component: () => import("@/components/Cart.vue"),
  },
  {
    path: "/meals",
    name: "meals",
    component: () => import("@/components/mealPrep.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: "active-link",
});

export default router;

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
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: "active-link",
});

export default router;

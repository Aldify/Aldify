import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Main from "@/views/Main.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: Main,
    props: route => ({ search: route.query.search }),
  },
  // {
  //   path: "/about",
  //   name: "About",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue"),
  // },
];

export default createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

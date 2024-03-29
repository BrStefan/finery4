// Composables
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("@/App.vue"),
    children: [
      {
        path: "",
        name: "Home",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "home" */ "@/views/Home.vue"),
      },
      {
        path: "/page1",
        name: "Page1",
        component: () =>
          import(/* webpackChunkName: "home" */ "@/views/Page1.vue"),
      },
      {
        path: "/article",
        name: "article",
        component: () =>
          import(/* webpackChunkName: "home" */ "@/views/ArticleDetails.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

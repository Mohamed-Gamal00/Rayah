import { createRouter, createWebHistory } from "vue-router";
const routes = [
  {
    path: "/",
    name: "home",
    component: () =>
      import(/* webpackChunkName: "home" */ "../views/HomeView.vue"),
  },
  {
    path: "/about",
    name: "about",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/articles",
    name: "articles",
    component: () =>
      import(/* webpackChunkName: "articles" */ "../views/ArticlesView.vue"),
  },
  {
    path: "/article/:id",
    name: "article",
    component: () =>
      import(/* webpackChunkName: "article" */ "../views/ArticlepostView.vue"),
  },
  {
    path: "/contact-us",
    name: "contact",
    component: () =>
      import(/* webpackChunkName: "contact" */ "../views/ArticlepostView.vue"),
  },
  {
    path: "/contact-us",
    name: "contact",
    component: () =>
      import(/* webpackChunkName: "contact" */ "../views/ContactUsView.vue"),
  },
  {
    path: "/servererror",
    name: "servererror",
    component: () =>
      import(/* webpackChunkName: "servererror" */ "../views/ServerError.vue"),
  },
  {
    path: "/:catchAll(.*)*",
    name: "errorpage",
    component: () =>
      import(/* webpackChunkName: "errorpage" */ "../views/ErrorView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

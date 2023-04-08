import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ArticlesView from "../views/ArticlesView.vue";
import ArticlepostView from "../views/ArticlepostView.vue";
import ContactUsView from "../views/ContactUsView.vue";
import ProductsView from "../views/ProductsView.vue";
import ServicesView from "../views/ServicesView.vue";
import ErrorView from "../views/ErrorView.vue";
import ServerError from "../views/ServerError.vue";
import OrderNow from "../components/products/OrderNow.vue";
const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/articles",
    name: "articles",
    component: ArticlesView,
  },
  {
    path: "/article/:id",
    name: "article",
    component: ArticlepostView,
  },
  {
    path: "/contact-us",
    name: "contact",
    component: ContactUsView,
  },
  {
    path: "/products",
    name: "products",
    component: ProductsView,
  },
  {
    path: "/ordernow",
    name: "ordernow",
    component: OrderNow,
  },
  {
    path: "/services",
    name: "services",
    component: ServicesView,
  },
  {
    path: "/servererror",
    name: "servererror",
    component: ServerError,
  },
  {
    path: "/:catchAll(.*)*",
    name: "errorpage",
    component: ErrorView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

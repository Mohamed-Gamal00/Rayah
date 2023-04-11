import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import "./css/style.css";
import "./css/style.scss";
import "./js/home.js";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "normalize.css";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import VueSweetalert2 from "vue-sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
import VueSnip from "vue-snip";
library.add(fas, far, fab);

const app = createApp(App);

// Use dynamic import to split router code into separate chunk
import("./router").then((module) => {
  app.use(module.default);
  app.use(store);
  app.use(VueSweetalert2);
  app.use(VueSnip);
  app.component("FontAwesome", FontAwesomeIcon);
  app.mount("#app");
});

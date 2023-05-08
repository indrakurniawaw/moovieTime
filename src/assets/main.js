import { createApp } from "vue";
import App from "./App.vue";
import "./assets/css/index.css";
import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/components/Home.vue";
import DetailMovie from "@/components/MovieDetail.vue";

const app = createApp(App);

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "Home",
      component: HomePage,
    },
    {
      path: "/movie",
      name: "DetailMovie",
      component: DetailMovie,
    },
  ],
});
app.use(router, {
  compilerOptions: {
    isCustomElement: (tag) => tag === "router-link" || tag === "router-view",
  },
});
createApp(App).mount("#app");

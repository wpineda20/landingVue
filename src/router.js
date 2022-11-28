import { createWebHashHistory, createRouter } from "vue-router";

import LoginVue from "@/views/LoginVue.vue";
import ContentVue from "@/views/ContentVue.vue";
import CardsVue from "@/views/CardsVue.vue";

const routes = [
  {
    path: "/",
    name: "ContentVue",
    component: ContentVue,
  },
  {
    path: "/login",
    name: "login",
    component: LoginVue,
  },
  {
    path: "/cards",
    name: "cards",
    component: CardsVue,
  },
  {
    path: "/solicitudes",
    beforeEnter() {
      location.href = "https://solicitudes.cultura.gob.sv/";
    },
    // component: CardsVue,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;

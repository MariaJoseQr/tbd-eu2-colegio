import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Ingreso from "../views/Ingreso.vue";
import Listado from "../views/Listado.vue";
import Reporte from "../views/Reporte.vue";

const routes = [
  { path: "/", name: "Home", component: Home },
  {
    path: "/ingreso",
    name: "Ingreso",
    component: Ingreso,
  },
  {
    path: "/listado",
    name: "Listado",
    component: Listado,
  },
  {
    path: "/reporte/:id",
    name: "Reporte",
    component: Reporte,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

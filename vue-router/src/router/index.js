import { createRouter, createWebHistory } from "vue-router";
import AboutView from "@/components/AboutView";
import HelloView from "@/components/HelloView";
import HomeView from "@/components/HomeView";

const routes = [
  {
    path: '/',
    component: HomeView
  },
  {
    path: '/about',
    component: AboutView
  },
  {
    path: '/hello',
    component: HelloView
  },
]

const router = createRouter({
  history: createWebHistory('/'),
  routes
})

export default router;
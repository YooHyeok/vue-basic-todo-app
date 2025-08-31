import { createRouter, createWebHistory } from "vue-router";
import AboutView from "@/components/AboutView";
import HelloView from "@/components/HelloView";
import HomeView from "@/components/HomeView";

const routes = [
  {
    path: '/',
    name: 'HomePage', /* 주로 path가 /:id 와 같이 동적파라미터(필수)로 되어있을 경우 push를 호출할 때 name을 사용하면 편하다. */
    component: HomeView
  },
  {
    path: '/about',
    name: 'AboutPage', /* /about/:id일 경우 push('/about/pk') 혹은 push({name:'AboutPage', params{id: 'pk'}}) 형태로 호출 */
    component: AboutView
  },
  {
    path: '/hello',
    name: 'HelloPage',
    component: HelloView
  },
]

const router = createRouter({
  history: createWebHistory('/'),
  routes
})

export default router;
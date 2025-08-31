import { createRouter, createWebHistory } from "vue-router";
import AboutView from "@/components/AboutView";
import HelloView from "@/components/HelloView";
import HomeView from "@/components/HomeView";
import ProductView from "@/components/ProductView";

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
    name: 'HelloPage', /* router-link에서 name기반 라우팅을 적용했을 경우 path가 변경되더라도 작동된다. */
    component: HelloView
  },
  {
    path: '/product/:id?', /* 동적 경로 매칭 (?를 붙힐 경우 /product로 요청이 올 경우 ''로 값을 받게 된다.)  */
    name: 'ProductPage',
    component: ProductView
  },
]

const router = createRouter({
  history: createWebHistory('/'),
  routes
})

export default router;
import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView';
import ShopView from '../views/ShopView';
import ShopItem from '../views/ShopItem';
import PageNotFound from '../views/PageNotFound';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/about',
    name: 'about',
  },
  {
    path: '/shop',
    name: 'shop',
    component: ShopView,
  },
  {
    path: '/shop',
    name: 'shop',
    component: ShopView,
  },
  {
    path: '/shop/:id',
    name: 'item',
    component: ShopItem,
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-foumnd',
    component: PageNotFound,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

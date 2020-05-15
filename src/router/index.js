import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/category/filter/:name',
    name: 'categoryfilter',
    component: () => import('../views/Categoryfilter.vue')
  },
  {
    path: '/area/filter/:name',
    name: 'areafilter',
    component: () => import('../views/Areafilter.vue')
  },
  {
    path: '/search',
    name: 'Search',
    component: () => import('../views/SearchMeals.vue')
  },
  {
    path: '/meals/detail/:id',
    name: 'Detail',
    component: () => import('../views/MealsDetail.vue')
  },
  {
    path: '/ingredient',
    name: 'Ingredient',
    component: () => import('../views/Ingredient.vue')
  },
  {
    path: '/ingredient/filter/:name',
    name: 'ingredientfilter',
    component: () => import('../views/Ingredientfilter.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/Register.vue')
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import('../views/Dashboard.vue')
  },
  {
    path: '/favourites',
    name: 'Favourites',
    component: () => import('../views/Favourite.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

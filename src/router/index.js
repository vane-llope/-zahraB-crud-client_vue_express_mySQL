import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    redirect : '/contacts',
    component: HomeView
  },
  {
    path : '/contacts',
    name : 'contactManager',
    component : () => import ('../views/contactManager.vue')
  },
  {
    path : '/contacts/add',
    name : 'addContact',
    component : () => import ('../views/addContact.vue')
  },
  {
    path : '/contacts/edit/:id',
    name : 'editContact',
    component : () => import ('../views/editContact.vue')
  },
  {
    path : '/contacts/view/:id',
    name : 'viewContact',
    component : () => import ('../views/viewContact.vue')
  },
  {
    path : '/:pathMatch(.*)*',
    name : 'notFound',
    component : () => import ('../views/notFound.vue')
  }


]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

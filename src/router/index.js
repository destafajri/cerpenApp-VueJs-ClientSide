import { createRouter, createWebHistory } from 'vue-router'
import Start from '../views/StartPage.vue'
import Welcome from '../views/Welcome.vue'
import GuestForm from '../views/GuestForm.vue'
import LoginAdmin from '../views/LoginAdmin.vue'
import LoginAuthor from '../views/LoginAuthor.vue'
import Register from '../views/Register.vue'
import Home from '../views/Home.vue'
import Cerpen from '../views/ViewCerpen.vue'
import Upload from '../views/UploadPageAuthor.vue'
import Yourcerpen from '../views/KumpulanCerpenAuthor.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'start',
      component: Start
    },
    {
      path: '/welcome',
      name: 'welcome',
      component: Welcome
    },
    {
      path: '/guest',
      name: 'GuestForm',
      component: GuestForm
    },
    {
      path: '/admin',
      name: 'LoginAdmin',
      component: LoginAdmin
    },
    {
      path: '/author',
      name: 'LoginAuthor',
      component: LoginAuthor
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      props: (route) => ({query: route.query.page})
    },
    {
      path: '/cerpen',
      name: 'Cerpen',
      component: Cerpen,
      props: (routes) => ({query: routes.query.order})
    },
    {
      path: '/upload/:id_author',
      name: 'Upload',
      component: Upload
    },
    {
      path: '/yourcerpen/:id_author',
      name: 'Yourcerpen',
      component: Yourcerpen,
      props: (routes) => ({query: routes.query.page})
    },
  ]
})

export default router

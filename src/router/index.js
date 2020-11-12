import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from "../views/Login";
import Tasks from "../views/Tasks";
import TaskCreateScreen from "../views/TaskCreateScreen";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/tasks',
    name: 'Tasks',
    component: Tasks
  },
  {
    path: '/create',
    name: 'CreateTask',
    component: TaskCreateScreen
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

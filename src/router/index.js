import Vue from 'vue'
import Router from 'vue-router'
import AllUsersList from '../components/usersList/UsersList'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/', component: AllUsersList }
  ]
})

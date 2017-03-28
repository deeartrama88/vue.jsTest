import Vue from 'vue'
import Router from 'vue-router'
import AllUsersList from '../components/usersList/UsersList'
import News from '../components/news/news'
import About from '../components/about/about'
import Materials from '../components/materials/materials'
import Activity from '../components/activity/activity'
import Projects from '../components/projects/projects'
import FAQ from '../components/faq/faq'
import Contacts from '../components/contacts/contacts'

Vue.use(Router)

export default new Router({
  mode: 'history',
  linkActiveClass: 'menuActiveLink',
  base: __dirname,
  routes: [
    { path: '/', component: AllUsersList },
    { path: '/news', component: News },
    { path: '/about', component: About },
    { path: '/materials', component: Materials },
    { path: '/activity', component: Activity },
    { path: '/projects', component: Projects },
    { path: '/faq', component: FAQ },
    { path: '/contacts', component: Contacts },
  ]
})

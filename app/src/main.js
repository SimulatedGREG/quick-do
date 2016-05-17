import './components/HomeView/assets/material-icons.css'
import 'normalize.css'

import Vue from 'vue'
import Resource from 'vue-resource'
import Router from 'vue-router'

import App from './App'
import routes from './routes'

Vue.use(Resource)
Vue.use(Router)
Vue.config.debug = true

const router = new Router()

router.map(routes)
router.beforeEach(() => {
  window.scrollTo(0, 0)
})
router.redirect({
  '*': '/'
})

router.start(App, 'app')

import Vue from 'vue'
import Vuex from 'vuex'
import middlewares from './middleware'
import modules from './modules'

Vue.use(Vuex)

export default new Vuex.Store({
  modules,
  middlewares,
  strict: true
})

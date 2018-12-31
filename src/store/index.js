import Vue from 'vue'
import Vuex from 'vuex'
import header from 'views/header/store/header'
import createLogger from 'vuex/dist/logger'
Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    header
  },
  plugins: [createLogger()]
})
export default store
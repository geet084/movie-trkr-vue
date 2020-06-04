import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Vuex from 'vuex'
import 'es6-promise/auto'

Vue.config.productionTip = false

Vue.use(Vuex)
Vue.use(VueAxios, axios)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

const store = new Vuex.Store({
  state: {
    userInfo: {
      name: '',
      email: ''
    }
  },
  mutations: {
    signOutUser: state => {
      state.userInfo = {
        name: '',
        email: ''
      }
    }
  }
})

new Vue({
  store: store,
  render: h => h(App),
}).$mount('#app')

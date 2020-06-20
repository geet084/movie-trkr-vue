import Vue from 'vue'
import Vuex from 'vuex'
import { actions } from './actions'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    userInfo: {
      name: '',
      email: ''
    }
  },
  mutations: {
    signInUser: (state, user) => {
      state.userInfo = user
    },
    signOutUser: state => {
      state.userInfo = {
        name: '',
        email: ''
      }
    }
  },
  actions
})
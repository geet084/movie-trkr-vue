import Vue from 'vue'
import Vuex from 'vuex'
import { actions } from './actions'
import { mutations } from './mutations'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    userInfo: {
      name: '',
      email: ''
    },
    favesList: [],
    moviesList: [],
    movieDetails: {},
    searchQuery: ''
  },
  mutations,
  actions
})
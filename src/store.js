import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'

let songApi = Axios.create({
  baseURL: 'https://itunes.apple.com/search?callback=?&term=',
  timeout: 3000
})

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    searchResults: [],
    activeSong: {}
  },
  mutations: {
    setResults(state, results) {
      state.searchResults = results
    },
    setActiveSong(state, movie) {
      state.activeSong = movie
    }
  },
  actions: {
    search({ commit, dispatch }, query) {
      songApi.get(query)
        .then(res => {
          let data = res.data.results
          commit('setResults', data)
        })
    },
    setActiveSong({ commit, dispatch }, song) {
      commit('setActiveSong', song)
    }
  }
})


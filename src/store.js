import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'

let songApi = Axios.create({
  baseURL: 'https://itunes.apple.com',
  timeout: 6000
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
    setActiveSong(state, song) {
      state.activeSong = song
    }
  },
  actions: {
    search({ commit, dispatch }, query) {
      songApi.get("search?&term=" + query)
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


import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    dogs: null,
    dogImages: null
  },
  getters: {
    getDogs: (state) => state.dogs,
    getDogImages: (state) => state.dogImages
  },
  mutations: {
    SET_DOGS: (state, dogs) => {
      state.dogs = dogs
    },
    SET_DOGIMAGES: (state, dogImages) => {
      state.dogImages = dogImages
    }
  },
  actions: {
    async fetchDogs ({ commit }) {
      const url = 'https://dog.ceo/api/breeds/list/all'
      const response = await fetch(url, {
        method: 'GET'
      })
      console.log(response)
      const res = await response.json()
      console.log(res)
      commit('SET_DOGS', res.message)
    },
    async fetchDogsImages ({ commit }, breed) {
      const url = `https://dog.ceo/api/breed/${breed}/images`
      const response = await fetch(url, {
        method: 'GET'
      })
      console.log(response)
      const res = await response.json()
      console.log(res)
      commit('SET_DOGIMAGES', res.message)
    }
  },
  modules: {
  }
})

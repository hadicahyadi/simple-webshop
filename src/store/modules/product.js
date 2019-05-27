import RESOURCES from '@/resources/'

const state = {
  list: [],
  byId: {}
}

const mutations = {
  allFetched(state, payload) {
    state.list = payload
  },
  byIdFetched(state, payload) {
    state.byId = payload
  }
}

const actions = {
  fetchAll({ commit }) {
    // api simulation
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        commit('allFetched', RESOURCES.products)
        resolve()
      }, 2e3)
    })
  },
  fetchById({commit}, payload) {
    // api simulation
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let product = RESOURCES.products.find(item => item.id === parseInt(payload))
        commit('byIdFetched', product)
        resolve()
      }, 1e3)
    })
  }
}

const getters = {
  getProduct: (state) => (id) => {
    return state.products.find((item) => item.id === id)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}

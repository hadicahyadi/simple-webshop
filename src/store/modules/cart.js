const state = {
  items: []
}

const mutations = {
  pushToCart(state, payload) {
    state.items.push({
      productId: payload.item.id,
      name: payload.item.name,
      price: payload.item.salePrice,
      quantity: payload.quantity
    })
  },
  incrementQuantity(state, payload) {
    let product = state.items.find(item => item.productId === payload.item.id)
    console.log(product)
    product.quantity++
  },
  setCartItems(state, payload) {
    state.items = payload
  }
}

const actions = {
  addToCart({state, commit}, payload) {
    let tmp = state.items.find(item => item.productId === payload.item.id)
    if (!tmp) {
      commit('pushToCart', payload)
    } else {
      commit('incrementQuantity', payload)
    }
  },
  checkout({ commit, state }, payload) {
    commit('setCartItems', [])

    return Promise.resolve()
  }
}

const getters = {
  getTotalPrice: (state) => {
    return state.items.reduce((total, item) => {
      return total + item.price * item.quantity
    }, 0)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}

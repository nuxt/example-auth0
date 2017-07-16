import Vuex from 'vuex'

const store = () => {
  return new Vuex.Store({
    state: {
      user: null
    },
    mutations: {
      SET_USER (state, user) {
        state.user = user || null
      }
    },
    getters: {
      isAuthenticated (state) {
        return !!state.user
      },
      loggedUser (state) {
        return state.user
      }
    }
  })
}

export default store

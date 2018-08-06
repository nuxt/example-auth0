export const state = () => {
  return {
    user: null
  }
}

export const mutations = {
  SET_USER (state, user) {
    state.user = user || null
  }
}

export const getters = {
  isAuthenticated (state) {
    return !!state.user
  },
  loggedUser (state) {
    return state.user
  }
}

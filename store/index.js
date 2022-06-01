export const state = () => ({
  user: null
})

export const getters = {
  getUser (state) {
    return state.user
  }
}

export const actions = {
  onAuthStateChangedAction ({ commit, dispatch }, { authUser, claims }) {
    if (!authUser) {
      commit('SET_USER', null)

      this.$router.push({
        path: '/auth/singin'
      })

      return
    }

    const { uid, email } = authUser

    commit('SET_USER', {
      uid,
      email
    })
  }
}

export const mutations = {
  SET_USER (state, user) {
    state.user = user
  }
}

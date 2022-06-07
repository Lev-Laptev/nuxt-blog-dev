export const state = () => ({
  projects: []
})

export const getters = {}

export const actions = {
  async getProjects ({ commit }) {
    const projects = await this.$axios.$get('/users/lev-laptev/repos')

    commit('ADD_PROJECTS', projects)
  }
}

export const mutations = {
  ADD_PROJECTS (state, projects) {
    state.projects = projects
  }
}

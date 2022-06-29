export const state = () => ({
  projects: []
})

export const getters = {}

export const actions = {
  async getProjects ({ commit }) {
    const projects = await this.$projectsApiService.getProjects()

    commit('ADD_PROJECTS', projects)
  }
}

export const mutations = {
  ADD_PROJECTS (state, projects) {
    state.projects = projects
  }
}

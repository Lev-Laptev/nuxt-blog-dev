import { ProjectsApiService } from '@/services/api'

export default (context, inject) => {
  const { $axios } = context

  const service = new ProjectsApiService($axios)

  context.$projectsApiService = service
  inject('projectsApiService', service)
}

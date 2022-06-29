import { ApiService } from '@/services'

class ProjectsApiService extends ApiService {
  getProjects () {
    return this.httpService.$get('/users/lev-laptev/repos')
  }
}

export default ProjectsApiService

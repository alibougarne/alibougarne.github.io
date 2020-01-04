import Axios, { AxiosResponse } from 'axios';
import Project from './project.entity';

export default class ProjectService {
  public async loadProjects(): Promise<Project[]> {
    let projects: Project[] = [];
    await Axios.get('/api/tags/all').then((response: AxiosResponse) => {
      console.log(response.data);
      projects = response.data;
    });
    return projects;
  }
}
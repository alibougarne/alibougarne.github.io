import Axios, { AxiosResponse } from 'axios';
import Project from './project.entity';

export default class ProjectService {
  public async loadProjectsPerTag(tagId:number): Promise<Project[]> {
    let projects: Project[] = [];
    await Axios.get('/api/projects/tag/'+tagId).then((response: AxiosResponse) => {
      projects = response.data;
    });
    return projects;
  }
}
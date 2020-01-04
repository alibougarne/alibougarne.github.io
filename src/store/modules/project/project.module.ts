import { VuexModule, Module, Mutation, Action } from 'vuex-class-modules';
import ProjectService from './project.service';
import Project from './project.entity';

@Module
class ProjectModule extends VuexModule {
  // state
  public projects:Project[]=[];
  private projectService:ProjectService = new ProjectService;
  // mutations
  @Mutation
  private setProjects(projects:Project[]) {
    this.projects = projects;
  }

  // actions
  @Action
  public async loadTags():Promise<Project[]>{
    let projects:Project[]=[];
    projects = await this.projectService.loadProjects();
    console.log('after load', projects)
    this.setProjects(projects);
    return projects;
  }
}

// register module (could be in any file)
import store from '@/store/index';
export const projectModule = new ProjectModule({ store, name: 'project' });
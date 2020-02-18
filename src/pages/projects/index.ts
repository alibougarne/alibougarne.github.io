import Vue from 'vue';
import Component from 'vue-class-component';
import { projectModule } from '@/store/modules/project/project.module';
import Project from '~/src/store/modules/project/project.entity';
import ProjectCardComponent from '@/components/project/card'
import { error } from 'util';
@Component({
  components: { ProjectCardComponent }
})
export default class PageIndex extends Vue {
  public projects: Project[] = [];
  public contentStyle: object = {
  }
  public contentActiveStyle: object = {
  }
  public thumbStyle: object = {
    right: '2px',
    borderRadius: '0px',
    backgroundColor: 'darkgoldenrod',
    width: '5px',
    opacity: 0.75
  }



  public mounted(): void {
    this.$q.loading.show({
      delay: 400 // ms
    });
    const tagId:string = this.$route.params.id;
    projectModule.loadProjectsPerTag(tagId).then((response: Project[]) => {
      this.projects = response;
      console.log('%c⧭ projects: projects list ====> ', 'color: #f2ceb6', response);

      setTimeout(() => {
        this.$q.loading.hide();
      }, 1000)
    }).catch((error: Error) => {
      this.$q.loading.hide();
      console.log(error);
    });
  }
}
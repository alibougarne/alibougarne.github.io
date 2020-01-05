import Vue from 'vue';
import Component from 'vue-class-component';
import { projectModule } from '@/store/modules/project/project.module';
import Project from '~/src/store/modules/project/project.entity';
import ProjectCardComponent from '@/components/project/card'
@Component({
  components: { ProjectCardComponent }
})
export default class PageIndex extends Vue {
  public projects: Project[] = [];
  public mounted(): void{
    this.$q.loading.show({
      delay: 400 // ms
    });
    const tagId = Number(this.$route.params.id);
    projectModule.loadProjectsPerTag(tagId).then((response:Project[])=> {
      this.projects = response;
      this.$q.loading.hide();
    });

  }
}
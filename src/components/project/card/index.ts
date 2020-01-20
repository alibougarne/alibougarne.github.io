import Vue from 'vue';
import Component from 'vue-class-component';
import{Prop} from 'vue-property-decorator';
import Axios, { AxiosResponse } from 'axios';
import Project from '@/store/modules/project/project.entity';
import imageHolder from './imageHolder'

@Component({
  components: {}
})
export default class ProjectCardComponent extends Vue { 
  @Prop() 
  public project?:Project;
  public imgHolder = imageHolder;

  public mounted():void{
  }
}
import Vue from 'vue';
import Component from 'vue-class-component';
import{Prop} from 'vue-property-decorator';
import Tag from '@/store/modules/tag/tag.entity';
import Axios, { AxiosResponse } from 'axios';

@Component({
  components: {}
})
export default class ProjectDetailComponent extends Vue { 
  @Prop() 
  public tag?:Tag;

  public getTagImage(path:string):string{
    let imgUrl = '';
    Axios.get('/api'+path).then((response:AxiosResponse) =>{
      console.log(response.data.source_url);
      imgUrl = response.data.source_url
    })
    return imgUrl;
  }
  
  public mounted():void{
  }
}
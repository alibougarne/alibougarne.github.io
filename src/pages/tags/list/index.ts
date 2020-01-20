import Vue from 'vue';
import Component from 'vue-class-component';
import { tagModule } from '@/store/modules/tag/tag.module'
import Tag from '~/src/store/modules/tag/tag.entity';
import TagComponent from '@/components/tag'
@Component({
  components: { TagComponent }
})
export default class PageIndex extends Vue {
  public tags: Tag[] = [];
  
  public async mounted(): Promise<void>{
    this.tags = await tagModule.loadTags();
    console.log('tags for page tags: ',this.tags)
  }
}
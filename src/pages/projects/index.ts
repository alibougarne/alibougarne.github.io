import Vue from 'vue';
import Component from 'vue-class-component';
import Tag from '@/store/modules/tag/tag.entity';
@Component({
  components: {  }
})
export default class PageIndex extends Vue {
  public tags: Tag[] = [];
  public async mounted(): Promise<void>{
    console.log('💩 projects for page projects: ',this.$router)
  }
}
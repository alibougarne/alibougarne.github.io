import Vue from 'vue';
import Component from 'vue-class-component';
import { tagModule } from '@/store/modules/tag/tag.module'
import Tag from '~/src/store/modules/tag/tag.entity';
import TagComponent from '@/components/tag'
@Component({
  components: { TagComponent }
})
export default class PageIndex extends Vue {
  private name = null;
  private age = null;
  private accept = false;

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
  
  private onSubmit() {
    if (this.accept !== true) {
      this.$q.notify({
        color: 'red-5',
        textColor: 'white',
        icon: 'warning',
        message: 'You need to accept the license and terms first'
      })
    }
    else {
      this.$q.notify({
        color: 'green-4',
        textColor: 'white',
        icon: 'cloud_done',
        message: 'Submitted'
      })
    }
  }

  private onReset() {
    this.name = null
    this.age = null
    this.accept = false
  }
  public async mounted(): Promise<void> {
    // this.tags = await tagModule.loadTags();
  }
}
import Vue from 'vue';
import Component from 'vue-class-component';

import { getModule } from 'vuex-module-decorators';
import LayoutStoreModule from './LayoutStoreModule';
@Component
export default class MyLayoutt extends Vue {
  private store = getModule(LayoutStoreModule);
  private copyright: string = `&copy; Made with ❤️ by <b style="color:$grey-8">Ali Bougarne</b> ${new Date().getFullYear()}`;
  private get leftDrawerOpen() {
    return this.store.leftDrawerOpen;
  }

  private set leftDrawerOpen(value: boolean) {
    this.store.setLeftDrawerOpen(value);
  }
  // leftDrawerOpen: boolean = false;
  private search: string = '';
  private links1: object[] = [
    { icon: 'home', text: 'Home' },
    { icon: 'code ', text: 'Work',path:'work' },
    { icon: 'subscriptions', text: 'Subscriptions' }
  ];
  private links2: object[] = [
    { icon: 'folder', text: 'Library' },
    { icon: 'restore', text: 'History' },
    { icon: 'watch_later', text: 'Watch later' },
    { icon: 'thumb_up_alt', text: 'Liked videos' }
  ];
  private links3: object[] = [
    { icon: 'fab fa-youtube', text: 'YouTube Premium' },
    { icon: 'local_movies', text: 'Movies & Shows' },
    { icon: 'videogame_asset', text: 'Gaming' },
    { icon: 'live_tv', text: 'Live' }
  ];
  private links4: object[] = [
    { icon: 'settings', text: 'Settings' },
    { icon: 'flag', text: 'Report history' },
    { icon: 'help', text: 'Help' },
    { icon: 'feedback', text: 'Send feedback' }
  ];
  private buttons1: object[] = [
    { text: 'About' },
    { text: 'Press' },
    { text: 'Copyright' },
    { text: 'Contact us' },
    { text: 'Creators' },
    { text: 'Advertise' },
    { text: 'Developers' }
  ];
  private buttons2: object[] = [
    { text: 'Terms' },
    { text: 'Privacy' },
    { text: 'Policy & Safety' },
    { text: 'Test new features' }
  ];

  public mounted(): void {
    (document as any).querySelector("body").classList.add(this.$route.name);
    console.log('💩💩💩 ', this.$q);
    console.log('💩 ', this.$route.name);
    console.log('💩 ', this.$router);
  }
}
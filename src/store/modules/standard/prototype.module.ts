import { VuexModule, Module, Mutation, Action } from 'vuex-class-modules';
import PrototypeService from './prototype.service';

@Module
class PrototypeModule extends VuexModule {
}

// register module (could be in any file)
import store from '@/store/index';
export const prototypeModule = new PrototypeModule({ store, name: 'category' });
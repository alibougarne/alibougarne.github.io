import { Common } from '@/store/modules/common/common.entity';
import Project from '../project/project.entity';

export default class Category extends Common {
  public name?: string;
  public projects?: Project[];
}
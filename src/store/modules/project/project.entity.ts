import { Common } from '@/store/modules/common/common.entity';
import Tag from '../tag/tag.entity';
import Category from '../category/category.entity';

export default class Project extends Common {
  public name?: string;
  public description?: string;
  public rating?:number;
  public category?: Category;
  public tags?: Tag[];

}
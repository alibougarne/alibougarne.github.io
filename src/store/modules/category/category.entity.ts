import { Common } from '@/store/modules/common/common.entity';

export default class Category extends Common {
  public name ?: string;
  public hashtag ?: string;
  public link ?: string;
  public description ?: string;
  public textColor ?: string;
  public backgroundColor ?: string;

}
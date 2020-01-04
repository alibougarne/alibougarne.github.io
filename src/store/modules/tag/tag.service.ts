import Tag from './tag.entity';
import Axios, { AxiosResponse } from 'axios';

export default class TagService {
  public async loadTags(): Promise<Tag[]> {
    let tags: Tag[] = [];
    await Axios.get('/api/tags/all').then((response: AxiosResponse) => {
      tags = response.data as Tag[];
      console.log(response.data);
    });
    return tags;
  }
}
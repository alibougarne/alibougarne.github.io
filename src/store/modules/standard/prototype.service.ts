import Axios, { AxiosResponse } from 'axios';

export default class PrototypeService {
  public async prototype(): Promise<void> {
    await Axios.get('/api/tags/all').then((response: AxiosResponse) => {
      console.log(response.data);
    });
    return
  }
}
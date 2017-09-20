import { extendObservable } from 'mobx';

class myStore {
  constructor() {
    extendObservable(this, {
      todos: [],
      projects: [],
      music: [],
      token: '',
      username: '',
      authenticated: false,
    })
  }
}
export default new myStore();

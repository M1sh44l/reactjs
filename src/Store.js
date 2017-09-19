import { extendObservable } from 'mobx';

class myStore {
  constructor() {
    extendObservable(this, {
      todos: [],
      projects: [],
      music: [],
    })
  }
}
export default new myStore();

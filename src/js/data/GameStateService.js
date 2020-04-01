import data from './data';

export default class GameStateService {
  constructor(storage) {
    this.storage = storage;
  }

  save(state) {
    this.storage.setItem('state', JSON.stringify(state));
  }

  static load() {
    try {
      return JSON.parse(data());
    } catch (e) {
      throw new Error('Error');
    }
  }
}
import HttpClient from './utils/HttpClient';

class CharacterService {
  constructor() {
    this.httpClient = new HttpClient();
  }

  getAll(page = 1, name = '') {
    return this.httpClient.get(`https://rickandmortyapi.com/api/character?page=${page}&name=${name}`);
  }

  getByName(name) {
    return this.httpClient.get(`https://rickandmortyapi.com/api/character/?name=${name}`);
  }

  getById(id) {
    return this.httpClient.get(`https://rickandmortyapi.com/api/character/${id}`);
  }
}

export default new CharacterService();

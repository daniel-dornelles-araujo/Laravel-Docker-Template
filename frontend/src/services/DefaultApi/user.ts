import DefaultApiClient from 'src/clients/DefaultApiClient';

export class UsersService {
  protected client;

  constructor() {
    this.client = DefaultApiClient;
  }

  index() {
    const response = this.client.get('/users');
    return response.data;
  }
}

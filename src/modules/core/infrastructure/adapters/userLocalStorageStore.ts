import { User } from '../../domain/entities/user';

class UserLocalStorageStore {
  public user;

  constructor() {
    this.user = JSON.parse(localStorage.getItem('user') as string);
  }

  save(user: User) {
    this.user = user;
    localStorage.setItem('user', JSON.stringify(user));

    console.log('User saved', {
      user,
    });
  }

  getUser(): User {
    return this.user;
  }
}

export const userLocalStorageStore = new UserLocalStorageStore();

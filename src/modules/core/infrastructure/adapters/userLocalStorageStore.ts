import { User } from '../../domain/entities/User';

class UserLocalStorageStore {
  public user: User;

  constructor() {
    this.user = User.create(JSON.parse(localStorage.getItem('user') as string));
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

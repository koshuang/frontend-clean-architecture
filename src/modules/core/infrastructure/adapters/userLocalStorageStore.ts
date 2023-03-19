import { User } from '../../domain/entities/User';

class UserLocalStorageStore {
  public user: User | null;

  constructor() {
    const userJson = localStorage.getItem('user') as string;

    this.user = userJson ? User.create(JSON.parse(userJson)) : null;
  }

  save(user: User) {
    this.user = user;
    localStorage.setItem('user', JSON.stringify(user));

    console.log('User saved', {
      user,
    });
  }

  getUser(): User | null {
    return this.user;
  }
}

export const userLocalStorageStore = new UserLocalStorageStore();

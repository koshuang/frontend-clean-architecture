import { StorageService } from '../../application/ports';
import { User } from '../../domain/entities/User';
import { LocalStorageAdapter } from './LocalStorageAdapter';

class UserStoreAdapter {
  public user: User | null;

  constructor(private storage: StorageService<User>) {
    this.user = User.create(storage.get('user'));
  }

  save(user: User) {
    this.user = user;
    this.storage.set('user', user);

    console.log('User saved', {
      user,
    });
  }

  getUser(): User | null {
    return this.user;
  }
}

export const userStoreAdapter = new UserStoreAdapter(
  new LocalStorageAdapter<User>()
);

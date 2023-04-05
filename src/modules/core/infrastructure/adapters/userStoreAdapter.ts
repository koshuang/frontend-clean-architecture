import {
  KeyValueStorageService,
  UserStoreService,
} from '../../application/ports';
import { User } from '../../domain/entities/User';
import { LocalStorageAdapter } from './LocalStorageAdapter';

class UserStoreAdapter implements UserStoreService {
  public user: User | null;

  constructor(private storage: KeyValueStorageService<User>) {
    this.user = User.create(storage.get('user'));
  }

  save(user: User) {
    this.user = user;
    this.storage.set('user', user);

    console.log('User saved', {
      user,
    });
  }

  get(): User | null {
    return this.user;
  }
}

export const userStoreAdapter = new UserStoreAdapter(
  new LocalStorageAdapter<User>()
);

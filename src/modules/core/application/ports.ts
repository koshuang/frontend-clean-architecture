import { User } from '../domain/entities/User';

export interface UserStorageService {
  user: User | null;
  updateUser(user: User): void;
}

export interface NotificationService {
  notify(message: string): void;
}

export interface StorageService<T> {
  set(key: string, value: T): void;
  get(key: string): T | null;
}

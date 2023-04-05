import { User } from '../domain/entities/User';

export interface UserStorageService {
  user: User | null;
  updateUser(user: User): void;
}

export interface NotificationService {
  notify(message: string): void;
}

export interface KeyValueStorageService<T> {
  set(key: string, value: T): void;
  get(key: string): T | null;
}

export interface StoreService<T> {
  get(): T | null;

  save(value: T): void;
}

export interface AsyncStoreService<T> {
  get(): Promise<T | null>;

  save(value: T): Promise<void>;
}

export type UserStoreService = StoreService<User>;

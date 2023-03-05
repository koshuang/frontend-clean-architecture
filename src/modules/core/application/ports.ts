import { User } from '../domain/entities/user';

export interface UserStorageService {
  user?: User;
  updateUser(user: User): void;
}

export interface NotificationService {
  notify(message: string): void;
}

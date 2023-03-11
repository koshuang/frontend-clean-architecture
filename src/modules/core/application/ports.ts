import { User } from '../domain/entities/User';

export interface UserStorageService {
  user?: User;
  updateUser(user: User): void;
}

export interface NotificationService {
  notify(message: string): void;
}

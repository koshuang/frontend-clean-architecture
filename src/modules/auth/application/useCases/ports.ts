import { User, UserName } from '../../../core/domain/entities/user';

export interface AuthenticationService {
  auth(name: UserName, email: Email): Promise<User>;
}

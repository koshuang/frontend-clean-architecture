import { User, UserName } from '@core/domain/entities/User';

export interface AuthenticationService {
  auth(name: UserName, email: Email): Promise<User>;
}

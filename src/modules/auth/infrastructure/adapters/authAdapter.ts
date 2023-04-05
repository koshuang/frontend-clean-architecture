import { User, UserName } from '@core/domain/entities/User';
import { fakeApi } from '@core/infrastructure/adapters/api';

import { AuthenticationService } from '../../application/ports';

class AuthAdapter implements AuthenticationService {
  auth(name: UserName, email: Email) {
    return fakeApi<User>(
      new User(
        'sample-user-id',
        name,
        email,
        ['cocoa', 'cherry'],
        ['marshmallow', 'peanuts']
      )
    );
  }
}

export const authAdapter = new AuthAdapter();

import { UserName } from '../../../core/domain/entities/user';

import { fakeApi } from '../../../core/infrastructure/adapters/api';
import { AuthenticationService } from '../../application/useCases/ports';

export function useAuth(): AuthenticationService {
  return {
    auth(name: UserName, email: Email) {
      return fakeApi({
        name,
        email,
        id: 'sample-user-id',
        allergies: ['cocoa', 'cherry'],
        preferences: ['marshmallow', 'peanuts'],
      });
    },
  };
}

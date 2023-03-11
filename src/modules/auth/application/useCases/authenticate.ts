import { UserStorageService } from '@core/application/ports';
import { UserName } from '@core/domain/entities/User';
import { useUserStore } from '@core/infrastructure/ui/components/UserProvider';
import { useAuth } from '../../infrastructure/adapters/authAdapter';
import { AuthenticationService } from './ports';

export function useAuthenticate() {
  // Usually, we access services through Dependency Injection.
  // Here we can use hooks as a crooked “DI-container”.

  // The use case function doesn't call third-party services directly,
  // instead, it relies on the interfaces we declared earlier.
  const storage: UserStorageService = useUserStore();
  const auth: AuthenticationService = useAuth();

  // Ideally, we would pass a command as an argument,
  // which would encapsulate all input data.
  async function authenticate(name: UserName, email: Email): Promise<void> {
    const user = await auth.auth(name, email);
    storage.updateUser(user);
  }

  return {
    user: storage.user,
    authenticate,
  };
}

import { UserStorageService } from '@core/application/ports';
import { UserName } from '@core/domain/entities/User';
import { AuthenticationService } from './ports';

export class AuthenticateUseCase {
  constructor(
    private auth: AuthenticationService,
    private storage: UserStorageService
  ) {}

  async perform(name: UserName, email: Email) {
    const user = await this.auth.auth(name, email);
    this.storage.updateUser(user);
  }
}

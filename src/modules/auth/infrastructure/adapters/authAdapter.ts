import { UserName } from "../../../core/domain/entities/user";

import { AuthenticationService } from "../../../../application/ports";
import { fakeApi } from "../../../core/infrastructure/adapters/api";

export function useAuth(): AuthenticationService {
  return {
    auth(name: UserName, email: Email) {
      return fakeApi({
        name,
        email,
        id: "sample-user-id",
        allergies: ["cocoa", "cherry"],
        preferences: ["marshmallow", "peanuts"],
      });
    },
  };
}

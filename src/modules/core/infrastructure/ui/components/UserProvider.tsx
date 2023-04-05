import React, {
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from 'react';

import { UserStorageService } from '@core/application/ports';
import { User } from '@core/domain/entities/User';
import { userStoreAdapter } from '@core/infrastructure/adapters/userStoreAdapter';

export const UserStoreContext = React.createContext<any>({});
export const useUserStore = () =>
  useContext<UserStorageService>(UserStoreContext);

export const UserProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    setUser(userStoreAdapter.get());
  }, []);

  const value: UserStorageService = {
    user,
    updateUser: (user: User) => {
      userStoreAdapter.save(user);

      setUser(userStoreAdapter.get());
    },
  };

  return (
    <UserStoreContext.Provider value={value}>
      {children}
    </UserStoreContext.Provider>
  );
};

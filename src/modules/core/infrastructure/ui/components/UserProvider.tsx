import React, {
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from 'react';

import { UserStorageService } from '@core/application/ports';
import { User } from '@core/domain/entities/User';
import { userLocalStorageStore } from '@core/infrastructure/adapters/userLocalStorageStore';

export const UserStoreContext = React.createContext<any>({});
export const useUserStore = () =>
  useContext<UserStorageService>(UserStoreContext);

export const UserProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    setUser(userLocalStorageStore.getUser());
  }, []);

  const value: UserStorageService = {
    user,
    updateUser: (user: User) => {
      userLocalStorageStore.save(user);

      setUser(userLocalStorageStore.getUser());
    },
  };

  return (
    <UserStoreContext.Provider value={value}>
      {children}
    </UserStoreContext.Provider>
  );
};

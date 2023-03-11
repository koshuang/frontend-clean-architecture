import React, {
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from 'react';

import { User } from '@core/domain/entities/user';
import { userLocalStorageStore } from '@core/infrastructure/adapters/userLocalStorageStore';

export const UserStoreContext = React.createContext<any>({});
export const useUserStore = () => useContext(UserStoreContext);

export const UserProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [user, setUser] = useState<User>();

  useEffect(() => {
    setUser(userLocalStorageStore.getUser());
  }, []);

  const value = {
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

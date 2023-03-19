import React, {
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from 'react';

import { User } from '@core/domain/entities/User';
import { userLocalStorageStore } from '@core/infrastructure/adapters/userLocalStorageStore';
type UserStore = {
  user: User;
  updateUser: () => {};
};

export const UserStoreContext = React.createContext<any>({});
export const useUserStore = () => useContext<UserStore>(UserStoreContext);

export const UserProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [user, setUser] = useState<User | null>();

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

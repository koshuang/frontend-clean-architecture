import React, { PropsWithChildren, useState } from 'react';

import { UserStoreContext } from '../../adapters/store';

export const UserProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [user, setUser] = useState();

  const value = {
    user,
    updateUser: setUser,
  };

  return (
    <UserStoreContext.Provider value={value}>
      {children}
    </UserStoreContext.Provider>
  );
};

import React, { useContext } from 'react';

export const UserStoreContext = React.createContext<any>({});
export const useUserStore = () => useContext(UserStoreContext);

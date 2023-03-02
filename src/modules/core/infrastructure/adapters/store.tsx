import React, { PropsWithChildren, useState } from "react";
import { useContext } from "react";

const StoreContext = React.createContext<any>({});
export const useUserStore = () => useContext(StoreContext);

export const UserProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [user, setUser] = useState();

  const value = {
    user,
    updateUser: setUser,
  };

  return (
    <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
  );
};

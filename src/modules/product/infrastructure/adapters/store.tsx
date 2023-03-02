import React, { PropsWithChildren } from "react";
import { useContext } from "react";
import { cookies } from "../../../product/infrastructure/adapters/fakeData";

const StoreContext = React.createContext<any>({});
export const useProductStore = () => useContext(StoreContext);

export const ProductProvider: React.FC<PropsWithChildren> = ({ children }) => {

  const value = {
    cookies,
  };

  return (
    <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
  );
};

import React, { PropsWithChildren, useState } from "react";
import { useContext } from "react";

const StoreContext = React.createContext<any>({});
export const useOrderStore = () => useContext(StoreContext);

export const OrderProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [orders, setOrders] = useState([]);

  const value = {
    orders,
    updateOrders: setOrders,
  };

  return (
    <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
  );
};

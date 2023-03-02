import React, { PropsWithChildren, useState } from "react";
import { useContext } from "react";
import { cookies } from "../../../product/infrastructure/adapters/fakeData";
import { UserProvider, useUserStore } from '../../../core/infrastructure/adapters/store';
export { useUserStore };

const StoreContext = React.createContext<any>({});
export const useStore = () => useContext(StoreContext);

export const Provider: React.FC<PropsWithChildren> = ({ children }) => {
  const [cart, setCart] = useState({ products: [] });
  const [orders, setOrders] = useState([]);

  const value = {
    cart,
    cookies,
    orders,
    updateCart: setCart,
    updateOrders: setOrders,
    emptyCart: () => setCart({ products: [] }),
  };

  return (
    <StoreContext.Provider value={value}>
      <UserProvider>
        {children}
      </UserProvider>
    </StoreContext.Provider>
  );
};

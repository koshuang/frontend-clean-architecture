import React, { PropsWithChildren, useState } from "react";
import { useContext } from "react";
import { UserProvider } from '../../../core/infrastructure/adapters/store';
import { ProductProvider, useProductStore } from '../../../product/infrastructure/adapters/store';
export { useProductStore };

const StoreContext = React.createContext<any>({});
export const useStore = () => useContext(StoreContext);

export const Provider: React.FC<PropsWithChildren> = ({ children }) => {
  const [cart, setCart] = useState({ products: [] });
  const [orders, setOrders] = useState([]);

  const value = {
    cart,
    orders,
    updateCart: setCart,
    updateOrders: setOrders,
    emptyCart: () => setCart({ products: [] }),
  };

  return (
    <StoreContext.Provider value={value}>
      <UserProvider>
        <ProductProvider>
          {children}
        </ProductProvider>
      </UserProvider>
    </StoreContext.Provider>
  );
};

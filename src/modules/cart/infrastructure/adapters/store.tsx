import React, { PropsWithChildren, useState } from "react";
import { useContext } from "react";

const StoreContext = React.createContext<any>({});
export const useCartStore = () => useContext(StoreContext);

export const CartProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [cart, setCart] = useState({ products: [] });

  const value = {
    cart,
    updateCart: setCart,
    emptyCart: () => setCart({ products: [] }),
  };

  return (
    <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
  );
};

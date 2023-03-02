import React, { useContext } from "react";

export const CartStoreContext = React.createContext<any>({});
export const useCartStore = () => useContext(CartStoreContext);

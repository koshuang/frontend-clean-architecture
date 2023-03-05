import React, { useContext } from 'react';

export const OrderStoreContext = React.createContext<any>({});
export const useOrderStore = () => useContext(OrderStoreContext);

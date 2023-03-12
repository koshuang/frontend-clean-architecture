import React, { PropsWithChildren, useContext, useState } from 'react';

export const OrderStoreContext = React.createContext<any>({});
export const useOrderStore = () => useContext(OrderStoreContext);

export const OrderProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [orders, setOrders] = useState([]);

  const value = {
    orders,
    updateOrders: setOrders,
  };

  return (
    <OrderStoreContext.Provider value={value}>
      {children}
    </OrderStoreContext.Provider>
  );
};

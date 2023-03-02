import React, { PropsWithChildren, useState } from "react";
import { OrderStoreContext } from '../../adapters/store';

export const OrderProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [orders, setOrders] = useState([]);

  const value = {
    orders,
    updateOrders: setOrders,
  };

  return (
    <OrderStoreContext.Provider value={value}>{children}</OrderStoreContext.Provider>
  );
};

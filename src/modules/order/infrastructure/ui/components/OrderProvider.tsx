import { OrderService } from '@cart/application/ports';
import { Order } from '@order/domain/entities/Order';
import React, { PropsWithChildren, useContext, useState } from 'react';

const defaultService = {
  orders: [],
  getOrders: () => [],
  updateOrders: () => null,
  createOrder: () => null,
};

export const OrderStoreContext =
  React.createContext<OrderService>(defaultService);
export const useOrderStore = () => useContext(OrderStoreContext);

export const OrderProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [orders, setOrders] = useState<Order[]>([]);

  const createOrder = (order: Order) => {
    setOrders([...orders, order]);
  };

  const value = {
    orders,
    getOrders: () => orders,
    updateOrders: setOrders,
    createOrder: createOrder,
  };

  return (
    <OrderStoreContext.Provider value={value}>
      {children}
    </OrderStoreContext.Provider>
  );
};

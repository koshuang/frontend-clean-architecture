import React, { PropsWithChildren } from "react";
import { UserProvider } from '../../../core/infrastructure/adapters/store';
import { ProductProvider, useProductStore } from '../../../product/infrastructure/adapters/store';
import { CartProvider } from '../../../cart/infrastructure/adapters/store';
import { OrderProvider } from '../../../order/infrastructure/adapters/store';
export { useProductStore };

export const Provider: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <UserProvider>
      <CartProvider>
        <ProductProvider>
          <OrderProvider>
          {children}
          </OrderProvider>
        </ProductProvider>
      </CartProvider>
    </UserProvider>
  );
};

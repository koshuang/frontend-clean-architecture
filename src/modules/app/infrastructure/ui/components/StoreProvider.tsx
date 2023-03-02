import React, { PropsWithChildren } from 'react';
import { UserProvider } from '../../../../core/infrastructure/adapters/store';
import { ProductProvider } from '../../../../product/infrastructure/adapters/store';
import { CartProvider } from '../../../../cart/infrastructure/ui/components/CartProvider';
import { OrderProvider } from '../../../../order/infrastructure/ui/components/OrderProvider';

export const Provider: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <UserProvider>
      <CartProvider>
        <ProductProvider>
          <OrderProvider>{children}</OrderProvider>
        </ProductProvider>
      </CartProvider>
    </UserProvider>
  );
};

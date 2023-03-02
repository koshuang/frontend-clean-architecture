import React, { PropsWithChildren } from 'react';
import { CartProvider } from '../../../../cart/infrastructure/ui/components/CartProvider';
import { OrderProvider } from '../../../../order/infrastructure/ui/components/OrderProvider';
import { ProductProvider } from '../../../../product/infrastructure/ui/components/ProductProvider';
import { UserProvider } from '../../../../core/infrastructure/ui/components/UserStore';

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

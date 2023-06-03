import React, { PropsWithChildren } from 'react';

import { CartProvider } from '@cart/infrastructure/ui/providers/CartProvider';
import { UserProvider } from '@core/infrastructure/ui/components/UserProvider';
import { OrderProvider } from '@order/infrastructure/ui/components/OrderProvider';
import { ProductProvider } from '@product/infrastructure/ui/components/ProductProvider';

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

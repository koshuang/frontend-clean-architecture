import React, { PropsWithChildren, useState } from 'react';

import { CartStoreContext } from '../../adapters/store';

export const CartProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [cart, setCart] = useState({ products: [] });

  const value = {
    cart,
    updateCart: setCart,
    emptyCart: () => setCart({ products: [] }),
  };

  return (
    <CartStoreContext.Provider value={value}>
      {children}
    </CartStoreContext.Provider>
  );
};

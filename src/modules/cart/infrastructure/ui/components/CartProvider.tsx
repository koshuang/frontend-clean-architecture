import React, { PropsWithChildren, useEffect, useState } from 'react';

import { Cart } from '@cart/domain/entities/cart';
import { cartLocalStorageStore } from '@cart/infrastructure/adapters/cartLocalStorageStore';
import { CartStoreContext } from '../../adapters/store';

export const CartProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [cart, setCart] = useState<Cart>({ products: [] });

  useEffect(() => {
    setCart({ products: cartLocalStorageStore.getProducts() });
  }, []);

  const value = {
    cart,
    updateCart: (cart: Cart) => {
      cartLocalStorageStore.setProducts(cart.products);

      setCart({ products: cartLocalStorageStore.getProducts() });
    },
    emptyCart: () => {
      cartLocalStorageStore.setProducts([]);
      setCart({ products: [] });
    },
  };

  return (
    <CartStoreContext.Provider value={value}>
      {children}
    </CartStoreContext.Provider>
  );
};

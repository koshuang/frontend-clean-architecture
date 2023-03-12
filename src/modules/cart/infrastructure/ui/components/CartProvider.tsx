import React, { PropsWithChildren, useEffect, useState } from 'react';

import { Cart } from '@cart/domain/entities/Cart';
import { cartLocalStorageStore } from '@cart/infrastructure/adapters/cartLocalStorageStore';
import { CartStoreContext } from '../../adapters/store';

export const CartProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [cart, setCart] = useState<Cart>();

  useEffect(() => {
    setCart(cartLocalStorageStore.getCart());
  }, []);

  const value = {
    cart,
    updateCart: (cart: Cart) => {
      cartLocalStorageStore.save(cart);

      setCart(cart.clone());
    },
    emptyCart: () => {
      if (cart) {
        cart.emptyCart();
        cartLocalStorageStore.save(cart);
        setCart(cart.clone());
      }
    },
  };

  return (
    <CartStoreContext.Provider value={value}>
      {children}
    </CartStoreContext.Provider>
  );
};

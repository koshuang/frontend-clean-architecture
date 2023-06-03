import React, {
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from 'react';

import { Cart } from '@cart/domain/entities/Cart';
import { cartLocalStorageStore } from '@cart/infrastructure/adapters/cartLocalStorageStore';

export const CartStoreContext = React.createContext<any>({});
export const useCartStore = () => useContext(CartStoreContext);

export const CartProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [cart, setCart] = useState<Cart>(new Cart());

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

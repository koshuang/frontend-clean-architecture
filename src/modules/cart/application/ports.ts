import { Cart } from '../domain/entities/Cart';

export interface CartStorageService {
  cart: Cart;
  updateCart(cart: Cart): void;
  emptyCart(): void;
}

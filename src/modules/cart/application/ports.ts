import { Order } from '@order/domain/entities/Order';
import { Cart } from '../domain/entities/Cart';

export interface CartStorageService {
  cart: Cart;
  updateCart(cart: Cart): void;
  emptyCart(): void;
}

export interface OrderStorageService {
  orders: Order[];
  updateOrders(orders: Order[]): void;
}

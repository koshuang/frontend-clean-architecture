import { Order } from '@order/domain/entities/Order';
import { Cart } from '../domain/entities/Cart';

export interface CartService {
  cart: Cart;
  updateCart(cart: Cart): void;
  emptyCart(): void;
}

export interface OrderService {
  orders: Order[];
  getOrders(): Order[];
  updateOrders(orders: Order[]): void;
  createOrder(order: Order): void;
}

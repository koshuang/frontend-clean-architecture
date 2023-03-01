import { Cart } from "../modules/cart/domain/entities/cart";
import { Order } from "../modules/order/domain/entities/order";
import { User, UserName } from "../modules/core/domain/entities/user";

export interface UserStorageService {
  user?: User;
  updateUser(user: User): void;
}

export interface CartStorageService {
  cart: Cart;
  updateCart(cart: Cart): void;
  emptyCart(): void;
}

export interface OrdersStorageService {
  orders: Order[];
  updateOrders(orders: Order[]): void;
}

export interface AuthenticationService {
  auth(name: UserName, email: Email): Promise<User>;
}

export interface NotificationService {
  notify(message: string): void;
}

export interface PaymentService {
  tryPay(amount: PriceCents): Promise<boolean>;
}

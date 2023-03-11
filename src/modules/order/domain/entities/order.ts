import { Cart } from '@cart/domain/entities/cart';
import { User } from '@core/domain/entities/User';
import { totalPrice } from '@product/domain/entities/product';

import { currentDatetime } from '../../../../lib/datetime';

export type OrderStatus = 'new' | 'delivery' | 'completed';

export type Order = {
  user: UniqueId;
  cart: Cart;
  created: DateTimeString;
  status: OrderStatus;
  total: PriceCents;
};

export function createOrder(user: User, cart: Cart): Order {
  return {
    cart,
    user: user.id,
    status: 'new',
    created: currentDatetime(),
    total: totalPrice(cart.products),
  };
}

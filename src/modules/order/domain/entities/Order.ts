import { Cart } from '@cart/domain/entities/Cart';
import { User } from '@core/domain/entities/User';
import { totalPrice } from '@product/domain/entities/product';

import { currentDatetime } from '../../../../lib/datetime';

export type OrderStatus = 'new' | 'delivery' | 'completed';

export class Order {
  constructor(
    public user: UniqueId,
    public cart: Cart,
    public created: DateTimeString,
    public status: OrderStatus,
    public total: PriceCents
  ) {}

  static create(user: User, cart: Cart): Order {
    return new Order(
      user.id,
      cart,
      currentDatetime(),
      'new',
      totalPrice(cart.products)
    );
  }
}

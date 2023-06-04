import { NotificationService } from '@core/application/ports';
import { User } from '@core/domain/entities/User';
import { Order } from '@order/domain/entities/Order';
import { PaymentService } from '@payment/application/ports';
import { Cart } from '../../domain/entities/Cart';
import { CartService, OrderService } from '../ports';

export class OrderProductsUseCase {
  constructor(
    private cartService: CartService,
    private orderService: OrderService,
    private payment: PaymentService,
    private notifier: NotificationService
  ) {}

  async perform(user: User, cart: Cart): Promise<Order | null> {
    // Here we can validate the data before creating the order.

    const order = Order.create(user, cart);

    // The use case function doesn't call third-party services directly,
    // instead, it relies on the interfaces we declared earlier.
    const paid = await this.payment.tryPay(order.total);
    if (!paid) {
      this.notifier.notify("The payment wasn't successful 🤷");
      return null;
    }

    this.orderService.createOrder(order);
    this.cartService.emptyCart();

    return order;
  }
}

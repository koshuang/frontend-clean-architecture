import { NotificationService } from '@core/application/ports';
import { User } from '@core/domain/entities/User';
import { Order } from '@order/domain/entities/Order';
import { PaymentService } from '@payment/application/ports';
import { Cart } from '../../domain/entities/Cart';
import { CartStorageService, OrderStorageService } from '../ports';

export class OrderProductsUseCase {
  constructor(
    private payment: PaymentService,
    private notifier: NotificationService,
    private cartStorage: CartStorageService,
    private orderStorage: OrderStorageService
  ) {}

  async perform(user: User, cart: Cart) {
    // Here we can validate the data before creating the order.

    const order = Order.create(user, cart);

    // The use case function doesn't call third-party services directly,
    // instead, it relies on the interfaces we declared earlier.
    const paid = await this.payment.tryPay(order.total);
    if (!paid) return this.notifier.notify("The payment wasn't successful 🤷");

    // And here we can save the order on the server, if necessary.

    const { orders } = this.orderStorage;
    this.orderStorage.updateOrders([...orders, order]);
    this.cartStorage.emptyCart();
  }
}

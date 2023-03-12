import { useCartStore } from '@cart/infrastructure/ui/components/CartProvider';
import { User } from '@core/domain/entities/User';
import { useNotifier } from '@core/infrastructure/adapters/notificationAdapter';
import { Order } from '@order/domain/entities/Order';
import { useOrderStore } from '@order/infrastructure/ui/components/OrderProvider';
import { usePayment } from '@payment/infrastructure/adapters/paymentAdapter';
import { Cart } from '../../domain/entities/Cart';

export function useOrderProducts() {
  // Usually, we access services through Dependency Injection.
  // Here we can use hooks as a crooked “DI-container”.
  const notifier = useNotifier();
  const payment = usePayment();
  const orderStorage = useOrderStore();
  const cartStorage = useCartStore();

  // We can also get `user` and `cart` right here through the corresponding hooks
  // and not pass them as arguments to a function.

  // Ideally, we would pass a command as an argument,
  // which would encapsulate all input data.
  async function orderProducts(user: User, cart: Cart) {
    // Here we can validate the data before creating the order.

    const order = Order.create(user, cart);

    // The use case function doesn't call third-party services directly,
    // instead, it relies on the interfaces we declared earlier.
    const paid = await payment.tryPay(order.total);
    if (!paid) return notifier.notify("The payment wasn't successful 🤷");

    // And here we can save the order on the server, if necessary.

    const { orders } = orderStorage;
    orderStorage.updateOrders([...orders, order]);
    cartStorage.emptyCart();
  }

  return { orderProducts };
}

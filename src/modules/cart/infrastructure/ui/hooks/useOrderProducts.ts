import { OrderProductsUseCase } from '@cart/application/useCases/OrderProductsUseCase';
import { useCartStore } from '@cart/infrastructure/ui/components/CartProvider';
import { User } from '@core/domain/entities/User';
import { useNotifier } from '@core/infrastructure/adapters/notificationAdapter';
import { useOrderStore } from '@order/infrastructure/ui/components/OrderProvider';
import { usePayment } from '@payment/infrastructure/adapters/paymentAdapter';
import { Cart } from '../../../domain/entities/Cart';

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
    const useCase: OrderProductsUseCase = new OrderProductsUseCase(
      payment,
      notifier,
      cartStorage,
      orderStorage
    );

    await useCase.perform(user, cart);
  }

  return { orderProducts };
}

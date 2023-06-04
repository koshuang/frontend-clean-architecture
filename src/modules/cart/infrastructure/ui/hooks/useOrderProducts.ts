import { OrderProductsUseCase } from '@cart/application/useCases/OrderProductsUseCase';
import { useCartStore } from '@cart/infrastructure/ui/providers/CartProvider';
import { User } from '@core/domain/entities/User';
import { notificationAdapter } from '@core/infrastructure/adapters/notificationAdapter';
import { useOrderStore } from '@order/infrastructure/ui/components/OrderProvider';
import { paymentAdapter } from '@payment/infrastructure/adapters/paymentAdapter';
import { Cart } from '../../../domain/entities/Cart';

export function useOrderProducts() {
  // Usually, we access services through Dependency Injection.
  // Here we can use hooks as a crooked “DI-container”.
  const orderStorage = useOrderStore();
  const cartStorage = useCartStore();

  // We can also get `user` and `cart` right here through the corresponding hooks
  // and not pass them as arguments to a function.

  // Ideally, we would pass a command as an argument,
  // which would encapsulate all input data.
  async function orderProducts(user: User, cart: Cart) {
    if (!orderStorage) {
      console.log(
        'Order store is not ready. Please wrap OrderProvider into the app'
      );
      return;
    }

    const useCase: OrderProductsUseCase = new OrderProductsUseCase(
      cartStorage,
      orderStorage,
      paymentAdapter,
      notificationAdapter
    );

    const order = await useCase.perform(user, cart);

    if (!order) {
      return;
    }
  }

  return { orderProducts };
}

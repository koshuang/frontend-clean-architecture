import { NotificationService } from '@core/application/ports';
import { User } from '@core/domain/entities/User';
import { useNotifier } from '@core/infrastructure/adapters/notificationAdapter';
import { Product } from '@product/domain/entities/Product';
import { CartStorageService } from '../../../application/ports';
import { AddToCartUseCase } from '../../../application/useCases/AddToCartUseCase';
import { useCartStore } from '../components/CartProvider';

export function useAddToCart() {
  const storage: CartStorageService = useCartStore();
  const notifier: NotificationService = useNotifier();

  function addToCart(user: User, product: Product): void {
    const useCase = new AddToCartUseCase(storage, notifier);

    useCase.perform(user, product);
  }

  return { addToCart };
}

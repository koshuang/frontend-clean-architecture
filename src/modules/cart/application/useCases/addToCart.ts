import { NotificationService } from '@core/application/ports';
import { User } from '@core/domain/entities/User';
import { useNotifier } from '@core/infrastructure/adapters/notificationAdapter';
import { Product } from '@product/domain/entities/product';

import { addProduct } from '../../domain/entities/cart';
import { useCartStore } from '../../infrastructure/adapters/store';
import { CartStorageService } from '../ports';

export function useAddToCart() {
  const storage: CartStorageService = useCartStore();
  const notifier: NotificationService = useNotifier();

  function addToCart(user: User, product: Product): void {
    const warning = 'This cookie is dangerous to your health! 😱';
    const isDangerous = product.toppings.some((item) => user.hasAllergy(item));
    if (isDangerous) return notifier.notify(warning);

    const { cart } = storage;
    const updated = addProduct(cart, product);
    storage.updateCart(updated);
  }

  return { addToCart };
}

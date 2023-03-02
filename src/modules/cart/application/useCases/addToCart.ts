import { Product } from "../../../product/domain/entities/product";
import { hasAllergy, User } from "../../../core/domain/entities/user";
import { addProduct } from "../../domain/entities/cart";

import { CartStorageService, NotificationService } from "../../../../application/ports";
import { useNotifier } from "../../../core/infrastructure/adapters/notificationAdapter";
import { useCartStore } from '../../infrastructure/adapters/store';

export function useAddToCart() {
  const storage: CartStorageService = useCartStore();
  const notifier: NotificationService = useNotifier();

  function addToCart(user: User, product: Product): void {
    const warning = "This cookie is dangerous to your health! 😱";
    const isDangerous = product.toppings.some((item) => hasAllergy(user, item));
    if (isDangerous) return notifier.notify(warning);

    const { cart } = storage;
    const updated = addProduct(cart, product);
    storage.updateCart(updated);
  }

  return { addToCart };
}

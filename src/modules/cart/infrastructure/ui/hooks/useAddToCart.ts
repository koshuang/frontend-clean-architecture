import { User } from '@core/domain/entities/User';
import { notificationAdapter } from '@core/infrastructure/adapters/notificationAdapter';
import { Product } from '@product/domain/entities/Product';
import { CartService } from '../../../application/ports';
import { AddToCartUseCase } from '../../../application/useCases/AddToCartUseCase';
import { useCartStore } from '../providers/CartProvider';

export function useAddToCart() {
  const storage: CartService = useCartStore();

  function addToCart(user: User, product: Product): void {
    const useCase = new AddToCartUseCase(storage, notificationAdapter);

    useCase.perform(user, product);
  }

  return { addToCart };
}

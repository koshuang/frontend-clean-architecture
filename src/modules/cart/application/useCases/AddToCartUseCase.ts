import { NotificationService } from '@core/application/ports';
import { User } from '@core/domain/entities/User';
import { Product } from '@product/domain/entities/Product';

import { CartService } from '../ports';

export class AddToCartUseCase {
  constructor(
    private storage: CartService,
    private notifier: NotificationService
  ) {}

  perform(user: User, product: Product) {
    const warning = 'This cookie is dangerous to your health! 😱';
    const isDangerous = product.toppings.some((item) => user.hasAllergy(item));
    if (isDangerous) return this.notifier.notify(warning);

    const { cart } = this.storage;
    const updated = cart.setUserId(user.id).addProduct(product);
    this.storage.updateCart(updated);
  }
}

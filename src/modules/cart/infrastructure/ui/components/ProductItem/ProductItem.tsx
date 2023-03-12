import { useAddToCart } from '@cart/application/useCases/addToCart';
import { useCartStore } from '@cart/infrastructure/adapters/store';
import { useUserStore } from '@core/infrastructure/ui/components/UserProvider';
import { Product } from '@product/domain/entities/product';
import { Cookie } from '@product/infrastructure/ui/components/Cookie';

import styles from './Cookie.module.css';

type CookieProps = {
  cookie: Product;
};

export function ProductItem({ cookie }: CookieProps) {
  const { user } = useUserStore();
  const { cart } = useCartStore();
  const { addToCart } = useAddToCart();

  return (
    <div className={styles.item}>
      <Cookie cookie={cookie} />
      {!!user && (
        <button type="button" onClick={() => addToCart(user, cookie)}>
          {cookie.price / 100} ₽
        </button>
      )}

      {cart.contains(cookie) && (
        <span className={styles.contains}>In your cart</span>
      )}
    </div>
  );
}

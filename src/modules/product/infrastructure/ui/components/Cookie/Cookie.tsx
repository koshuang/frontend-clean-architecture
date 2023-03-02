import { contains } from "../../../../../cart/domain/entities/cart";
import { Product } from "../../../../domain/entities/product";
import { useAddToCart } from "../../../../../cart/application/useCases/addToCart";

import styles from "./Cookie.module.css";
import { Toppings } from "./Toppings";
import { useUserStore } from '../../../../../core/infrastructure/adapters/store';
import { useCartStore } from '../../../../../cart/infrastructure/adapters/store';

type CookieProps = {
  cookie: Product;
};

export function Cookie({ cookie }: CookieProps) {
  const { user } = useUserStore();
  const { cart } = useCartStore();
  const { addToCart } = useAddToCart();

  return (
    <article className={styles.cookie}>
      <span className={styles.image}>🍪</span>
      <span className={styles.title}>{cookie.title}</span>
      <Toppings cookie={cookie} />

      {!!user && (
        <button type="button" onClick={() => addToCart(user, cookie)}>
          {cookie.price / 100} ₽
        </button>
      )}

      {contains(cart, cookie) && (
        <span className={styles.contains}>In your cart</span>
      )}
    </article>
  );
}

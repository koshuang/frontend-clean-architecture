import { Product, totalPrice } from '@product/domain/entities/product';
import { Cookie } from '@product/infrastructure/ui/components/Cookie';

import { useCartStore } from '../../../adapters/store';
import styles from './Cart.module.css';

export function Cart() {
  const { cart } = useCartStore();

  return (
    <section>
      <h2>Cart</h2>

      <ul className={styles.list}>
        {cart.products.map((product: Product, index: number) => (
          <li key={index}>
            <Cookie cookie={product} />
          </li>
        ))}
      </ul>

      <p>Total: {totalPrice(cart.products) / 100} ₽</p>
    </section>
  );
}

import { Product } from '@product/domain/entities/Product';

import { useCartStore } from '../../../adapters/store';
import { ProductItem } from '../ProductItem';
import styles from './Cart.module.css';

export function Cart() {
  const { cart } = useCartStore();

  return (
    <section>
      <h2>Cart</h2>

      <ul className={styles.list}>
        {cart.products.map((product: Product, index: number) => (
          <li key={index}>
            <ProductItem cookie={product} />
          </li>
        ))}
      </ul>

      <p>Total: {cart.totalPrice() / 100} ₽</p>
    </section>
  );
}

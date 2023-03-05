import { ProductItem } from '@cart/infrastructure/ui/components/ProductItem';
import { Product } from '@product/domain/entities/product';
import { useProductStore } from '@product/infrastructure/adapters/store';

import styles from './Front.module.css';

export function Front() {
  const { cookies } = useProductStore();

  return (
    <main>
      <h1>Cookies</h1>

      <ul className={styles.list}>
        {cookies.map((cookie: Product) => (
          <li key={cookie.id}>
            <ProductItem cookie={cookie} />
          </li>
        ))}
      </ul>
    </main>
  );
}

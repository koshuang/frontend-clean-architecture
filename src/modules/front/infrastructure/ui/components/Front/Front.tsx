import { Product } from '@product/domain/entities/product';
import { useProductStore } from '@product/infrastructure/adapters/store';
import { Cookie } from '@product/infrastructure/ui/components/Cookie';
import styles from './Front.module.css';

export function Front() {
  const { cookies } = useProductStore();

  return (
    <main>
      <h1>Cookies</h1>

      <ul className={styles.list}>
        {cookies.map((cookie: Product) => (
          <li key={cookie.id}>
            <Cookie cookie={cookie} />
          </li>
        ))}
      </ul>
    </main>
  );
}

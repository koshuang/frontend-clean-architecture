import { useCartStore } from '../../../../../cart/infrastructure/adapters/store';
import { useUserStore } from '../../../../../core/infrastructure/adapters/store';
import styles from './Header.module.css';

export function Header() {
  const { user } = useUserStore();
  const { cart } = useCartStore();

  return (
    <header className={styles.header}>
      <a className={styles.logo} href="/">
        Co0o0o0o0okie!!!1 🍪
      </a>

      {!user ? (
        <a href="/auth">Log in</a>
      ) : (
        <a href="/user">
          {user.name} ({cart.products.length})
        </a>
      )}
    </header>
  );
}

import { Link } from 'react-router-dom';

import { useCartStore } from '@cart/infrastructure/adapters/store';
import { useUserStore } from '@core/infrastructure/adapters/store';
import styles from './Header.module.css';

export function Header() {
  const { user } = useUserStore();
  const { cart } = useCartStore();

  return (
    <header className={styles.header}>
      <Link className={styles.logo} to="/">
        Co0o0o0o0okie!!!1 🍪
      </Link>

      {!user ? (
        <Link to="/auth">Log in</Link>
      ) : (
        <Link to="/user">
          {user.name} ({cart.products.length})
        </Link>
      )}
    </header>
  );
}

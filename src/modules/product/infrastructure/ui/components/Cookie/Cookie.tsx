import { Product } from '../../../../domain/entities/Product';
import styles from './Cookie.module.css';
import { Toppings } from './Toppings';

type CookieProps = {
  cookie: Product;
};

export function Cookie({ cookie }: CookieProps) {
  return (
    <article>
      <span className={styles.image}>🍪</span>
      <span className={styles.title}>{cookie.title}</span>
      <Toppings cookie={cookie} />
    </article>
  );
}

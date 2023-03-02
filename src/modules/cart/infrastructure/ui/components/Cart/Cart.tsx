import { totalPrice } from "../../../../../product/domain/entities/product";
import { useCartStorage } from "../../../../../app/infrastructure/adapters/storageAdapter";
import { Cookie } from "../../../../../product/infrastructure/ui/components/Cookie";
import styles from "./Cart.module.css";

export function Cart() {
  const { cart } = useCartStorage();

  return (
    <section>
      <h2>Cart</h2>

      <ul className={styles.list}>
        {cart.products.map((product) => (
          <li key={product.id}>
            <Cookie cookie={product} />
          </li>
        ))}
      </ul>

      <p>Total: {totalPrice(cart.products) / 100} ₽</p>
    </section>
  );
}

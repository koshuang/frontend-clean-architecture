import React, { useState } from 'react';

import { useOrderProducts } from '@cart/application/useCases/orderProducts';
import { useCartStore } from '@cart/infrastructure/adapters/store';
import { UserName } from '@core/domain/entities/user';
import { useUserStore } from '@core/infrastructure/adapters/store';

import styles from './Buy.module.css';

export function Buy() {
  const { orderProducts } = useOrderProducts();
  const { user } = useUserStore();
  const { cart } = useCartStore();

  const [name, setName] = useState<UserName>(user?.name ?? '');
  const [email, setEmail] = useState<Email>(user?.email ?? '');
  const [address, setAddress] = useState('');
  const [loading, setLoading] = useState(false);

  if (!user || !cart.products.length) return null;

  async function handleSubmit(e: React.FormEvent) {
    setLoading(true);
    e.preventDefault();
    await orderProducts(user!, cart);
    setLoading(false);
  }

  return (
    <section>
      <h2>Checkout</h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label>
          <span>Name</span>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            autoFocus
          />
        </label>
        <label>
          <span>Email</span>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          <span>Address</span>
          <textarea
            name="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          ></textarea>
        </label>

        <button type="submit" disabled={loading}>
          {loading ? 'Preparing an order...' : 'Checkout'}
        </button>
      </form>
    </section>
  );
}

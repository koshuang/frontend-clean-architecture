import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { UserName } from '@core/domain/entities/User';
import { useAuthenticate } from '../../hooks/useAuthenticate';
import styles from './Auth.module.css';

export function Auth() {
  const [name, setName] = useState<UserName>('');
  const [email, setEmail] = useState<Email>('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const { user, authenticate } = useAuthenticate();

  useEffect(() => {
    if (!!user) navigate('/');
  }, [user, navigate]);

  async function handleSubmit(e: React.FormEvent) {
    setLoading(true);
    e.preventDefault();

    await authenticate(name, email);
    setLoading(false);
  }

  return (
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

      <button type="submit" disabled={loading}>
        {loading ? 'Trying to login...' : 'Login'}
      </button>
    </form>
  );
}

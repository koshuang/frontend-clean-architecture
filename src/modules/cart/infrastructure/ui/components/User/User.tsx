import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { Profile } from '@cart/infrastructure/ui/components/Profile';
import { useUserStore } from '@core/infrastructure/ui/components/UserProvider';
import { Buy } from '@order/infrastructure/ui/components/Buy';
import { Orders } from '@order/infrastructure/ui/components/Orders';
import { Cart } from '../Cart';

export function User() {
  const navigate = useNavigate();
  const { user } = useUserStore();

  useEffect(() => {
    if (!user) navigate('/auth');
  });

  return (
    <main>
      <Profile />
      <Orders />
      <Cart />
      <Buy />
    </main>
  );
}

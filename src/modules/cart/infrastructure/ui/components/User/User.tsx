import { Redirect } from "react-router";
import { Buy } from "../../../../../order/infrastructure/ui/components/Buy";
import { Cart } from "../Cart";
import { Orders } from "../../../../../order/infrastructure/ui/components/Orders";
import { Profile } from "../../../../../core/infrastructure/ui/components/Profile";
import { useUserStore } from '../../../../../core/infrastructure/adapters/store';

export function User() {
  const { user } = useUserStore();
  if (!user) return <Redirect to="/auth" />;

  return (
    <main>
      <Profile />
      <Orders />
      <Cart />
      <Buy />
    </main>
  );
}

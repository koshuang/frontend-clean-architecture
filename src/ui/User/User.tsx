import { Redirect } from "react-router";
import { useUserStorage } from "../../adapters/storageAdapter";
import { Buy } from "../../modules/order/infrastructure/ui/components/Buy";
import { Cart } from "../../modules/cart/infrastructure/ui/components/Cart";
import { Orders } from "../../modules/order/infrastructure/ui/components/Orders";
import { Profile } from "../../modules/core/infrastructure/ui/components/Profile";

export function User() {
  const { user } = useUserStorage();
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

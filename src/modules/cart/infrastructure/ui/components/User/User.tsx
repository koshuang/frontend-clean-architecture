import { Redirect } from "react-router";
import { useUserStorage } from "../../../../../app/infrastructure/adapters/storageAdapter";
import { Buy } from "../../../../../order/infrastructure/ui/components/Buy";
import { Cart } from "../Cart";
import { Orders } from "../../../../../order/infrastructure/ui/components/Orders";
import { Profile } from "../../../../../core/infrastructure/ui/components/Profile";

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

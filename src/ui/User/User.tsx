import { Redirect } from "react-router";
import { useUserStorage } from "../../adapters/storageAdapter";
import { Buy } from "../Buy";
import { Cart } from "../Cart";
import { Orders } from "../Orders";
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

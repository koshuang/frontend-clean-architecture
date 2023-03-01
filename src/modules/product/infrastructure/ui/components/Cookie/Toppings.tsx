import { Product, ingredients } from "../../../../domain/entities/product";
import { hasAllergy, hasPreference } from "../../../../../core/domain/entities/user";
import { useUserStorage } from "../../../../../core/infrastructure/adapters/storageAdapter";

type ToppingsProps = {
  cookie: Product;
};

export function Toppings({ cookie }: ToppingsProps) {
  const { user } = useUserStorage();

  return (
    <ul>
      {cookie.toppings.map((topping) => (
        <li key={topping}>
          {ingredients[topping]}{" "}
          {!!user && hasPreference(user, topping) && <>👍</>}{" "}
          {!!user && hasAllergy(user, topping) && <>⚠️</>}
        </li>
      ))}
    </ul>
  );
}

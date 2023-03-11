import { useUserStore } from '@core/infrastructure/ui/components/UserProvider';
import { Product, ingredients } from '../../../../domain/entities/product';

type ToppingsProps = {
  cookie: Product;
};

export function Toppings({ cookie }: ToppingsProps) {
  const { user } = useUserStore();

  return (
    <ul>
      {cookie.toppings.map((topping) => (
        <li key={topping}>
          {ingredients[topping]}{' '}
          {!!user && user.hasPreference(topping) && <>👍</>}{' '}
          {!!user && user.hasAllergy(topping) && <>⚠️</>}
        </li>
      ))}
    </ul>
  );
}

import { useUserStore } from '@core/infrastructure/ui/components/UserProvider';
import { ingredients } from '@product/domain/entities/Product';

export function Profile() {
  const { user } = useUserStore();
  if (!user) return null;

  return (
    <>
      <h1>{user.name}</h1>
      <p>{user.email}</p>
      <p>Allergies</p>
      <ul>
        {user.allergies.map((ingredient: Ingredient) => (
          <li key={ingredient}>{ingredients[ingredient]}</li>
        ))}
      </ul>
      <p>Preferences</p>
      <ul>
        {user.preferences.map((ingredient: Ingredient) => (
          <li key={ingredient}>{ingredients[ingredient]}</li>
        ))}
      </ul>
    </>
  );
}

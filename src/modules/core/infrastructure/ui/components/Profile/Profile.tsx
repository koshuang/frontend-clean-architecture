import { ingredients } from "../../../../../../domain/entities/product";
import { useUserStorage } from "../../../../../../adapters/storageAdapter";

export function Profile() {
  const { user } = useUserStorage();
  if (!user) return null;

  return (
    <>
      <h1>{user.name}</h1>
      <p>{user.email}</p>
      <p>Allergies</p>
      <ul>
        {user.allergies.map((ingredient) => (
          <li key={ingredient}>{ingredients[ingredient]}</li>
        ))}
      </ul>
      <p>Preferences</p>
      <ul>
        {user.preferences.map((ingredient) => (
          <li key={ingredient}>{ingredients[ingredient]}</li>
        ))}
      </ul>
    </>
  );
}

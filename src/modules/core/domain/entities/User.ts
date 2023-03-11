export type UserName = string;

export class User {
  constructor(
    public id: UniqueId,
    public name: UserName,
    public email: Email,
    public preferences: Ingredient[],
    public allergies: Ingredient[]
  ) {}

  static create(dto: any): User {
    return new User(dto.id, dto.name, dto.name, dto.preferences, dto.allergies);
  }

  hasAllergy(ingredient: Ingredient): boolean {
    return this.allergies.includes(ingredient);
  }

  hasPreference(ingredient: Ingredient): boolean {
    return this.preferences.includes(ingredient);
  }
}

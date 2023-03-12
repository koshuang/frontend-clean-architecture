export type ProductTitle = string;

export const ingredients: Record<Ingredient, string> = {
  chocolate: 'Chocolate',
  cocoa: 'Cocoa Powder',
  cherry: 'Cherry',
  marshmallow: 'Marshmallow',
  peanuts: 'Peanut Butter',
};

export class Product {
  constructor(
    public id: UniqueId,
    public title: ProductTitle,
    public price: PriceCents,
    public toppings: Ingredient[]
  ) {}
}

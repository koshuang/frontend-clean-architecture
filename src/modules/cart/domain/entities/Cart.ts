import { Product } from '@product/domain/entities/Product';

export class Cart {
  constructor(public products: Product[] = []) {}

  static create(products: Product[] = []) {
    return new Cart(products);
  }

  clone() {
    return new Cart(this.products);
  }

  addProduct(product: Product): Cart {
    this.products = [...this.products, product];

    return this;
  }

  totalPrice(): number {
    return this.products.reduce((total, { price }) => total + price, 0);
  }

  emptyCart() {
    this.products = [];
  }

  contains(product: Product): boolean {
    return this.products.some(({ id }) => id === product.id);
  }
}

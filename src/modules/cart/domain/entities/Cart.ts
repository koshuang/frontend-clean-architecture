import { Product } from '@product/domain/entities/Product';

export class Cart {
  constructor(
    public products: Product[] = [],
    public userId: UniqueId | null = null
  ) {}

  static create(products: Product[] = [], userId = null) {
    return new Cart(products, userId);
  }

  clone() {
    return new Cart(this.products, this.userId);
  }

  setUserId(userId: UniqueId) {
    this.userId = userId;

    return this;
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

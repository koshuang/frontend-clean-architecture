import { Product } from '@product/domain/entities/Product';

class ProductMemoryStore {
  private products: Product[] = [];

  public getProducts() {
    return this.products;
  }

  public setProducts(products: Product[]) {
    this.products = products;
  }
}

export const productMemoryStore = new ProductMemoryStore();

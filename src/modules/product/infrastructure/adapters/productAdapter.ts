import { cookies } from './fakeData';

class ProductAdapter {
  public async fetchProducts() {
    return cookies;
  }
}

export const productAdapter = new ProductAdapter();

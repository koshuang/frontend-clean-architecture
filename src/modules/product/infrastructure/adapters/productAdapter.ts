import { ProductService } from '@product/application/ports';
import { cookies } from './fakeData';

class ProductAdapter implements ProductService {
  public async fetchProducts() {
    return cookies;
  }
}

export const productAdapter: ProductService = new ProductAdapter();

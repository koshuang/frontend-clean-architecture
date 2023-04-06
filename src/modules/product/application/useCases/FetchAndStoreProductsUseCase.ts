import { Product } from '@product/domain/entities/Product';
import { productAdapter } from '@product/infrastructure/adapters/productAdapter';
import { productsStoreAdapter } from '@product/infrastructure/adapters/productsStoreAdapter';
import { ProductService, ProductsStoreService } from '../ports';

class FetchAndStoreProductsUseCase {
  constructor(
    private productService: ProductService,
    private productsStoreService: ProductsStoreService
  ) {}

  async perform(): Promise<Product[]> {
    const products = await this.productService.fetchProducts();
    this.productsStoreService.save(products);

    return products;
  }
}

export const fetchAndStoreProductsUseCase = new FetchAndStoreProductsUseCase(
  productAdapter,
  productsStoreAdapter
);

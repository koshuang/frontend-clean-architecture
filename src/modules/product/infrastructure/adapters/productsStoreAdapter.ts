import { MemoryStoreAdapter } from '@core/infrastructure/adapters/MemoryStoreAdapter';
import { ProductsStoreService } from '@product/application/ports';
import { Product } from '@product/domain/entities/Product';

export const productsStoreAdapter: ProductsStoreService =
  new MemoryStoreAdapter<Product[]>();

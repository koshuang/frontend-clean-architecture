import { StoreService } from '@core/application/ports';
import { Product } from '@product/domain/entities/Product';

export type ProductsStoreService = StoreService<Product[]>;

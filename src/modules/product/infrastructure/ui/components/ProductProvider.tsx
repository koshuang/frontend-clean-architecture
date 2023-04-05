import React, {
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from 'react';

import { Product } from '@product/domain/entities/Product';
import { productAdapter } from '@product/infrastructure/adapters/productAdapter';
import { productsStoreAdapter } from '@product/infrastructure/adapters/productsStoreAdapter';

export const ProductStoreContext = React.createContext<any>({});
export const useProductStore = () => useContext(ProductStoreContext);

export const ProductProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [cookies, setCookies] = useState<Product[]>([]);

  const fetchProducts = async () => {
    const products = await productAdapter.fetchProducts();
    productsStoreAdapter.save(products);
    setCookies(products);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const value = {
    cookies,
  };

  return (
    <ProductStoreContext.Provider value={value}>
      {children}
    </ProductStoreContext.Provider>
  );
};

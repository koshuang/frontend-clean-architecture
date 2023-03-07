import React, {
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from 'react';

import { Product } from '@product/domain/entities/product';
import { productAdapter } from '@product/infrastructure/adapters/productAdapter';
import { productMemoryStore } from '@product/infrastructure/adapters/productMemoryStore';

export const ProductStoreContext = React.createContext<any>({});
export const useProductStore = () => useContext(ProductStoreContext);

export const ProductProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [cookies, setCookies] = useState<Product[]>([]);

  const fetchProducts = async () => {
    const products = await productAdapter.fetchProducts();
    productMemoryStore.setProducts(products);
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

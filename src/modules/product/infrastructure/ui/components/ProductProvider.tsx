import React, {
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from 'react';

import { fetchAndStoreProductsUseCase } from '@product/application/useCases/FetchAndStoreProductsUseCase';
import { Product } from '@product/domain/entities/Product';

export const ProductStoreContext = React.createContext<any>({});
export const useProductStore = () => useContext(ProductStoreContext);

export const ProductProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [cookies, setCookies] = useState<Product[]>([]);

  const fetchProducts = async () => {
    const products = await fetchAndStoreProductsUseCase.perform();

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

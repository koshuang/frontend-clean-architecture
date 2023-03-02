import React, { PropsWithChildren } from 'react';
import { ProductStoreContext } from '../../adapters/store';
import { cookies } from '../../adapters/fakeData';

export const ProductProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const value = {
    cookies,
  };

  return (
    <ProductStoreContext.Provider value={value}>
      {children}
    </ProductStoreContext.Provider>
  );
};

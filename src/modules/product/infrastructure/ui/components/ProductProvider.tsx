import React, { PropsWithChildren } from 'react';

import { cookies } from '../../adapters/fakeData';
import { ProductStoreContext } from '../../adapters/store';

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

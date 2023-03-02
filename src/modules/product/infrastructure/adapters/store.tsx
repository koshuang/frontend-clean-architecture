import React, { useContext } from 'react';

export const ProductStoreContext = React.createContext<any>({});
export const useProductStore = () => useContext(ProductStoreContext);

import {
  OrdersStorageService,
} from "../../../../application/ports";
import { useProductStore, useStore } from "./store";

// It's also possible to split the whole storage into atomic stores.
// Inside corresponding hooks we can apply memoization, optimizations, selectors...
// Well, you get the idea.

export function useOrdersStorage(): OrdersStorageService {
  return useStore();
}

export function useProductsStorage(): OrdersStorageService {
  return useProductStore();
}

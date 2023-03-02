import {
  CartStorageService,
  OrdersStorageService,
  UserStorageService,
} from "../../../../application/ports";
import { useStore, useUserStore } from "../../../app/infrastructure/adapters/store";

// It's also possible to split the whole storage into atomic stores.
// Inside corresponding hooks we can apply memoization, optimizations, selectors...
// Well, you get the idea.

export function useUserStorage(): UserStorageService {
  return useUserStore();
}

export function useCartStorage(): CartStorageService {
  return useStore();
}

export function useOrdersStorage(): OrdersStorageService {
  return useStore();
}

import { Cart } from '@cart/domain/entities/cart';
import { Product } from '@product/domain/entities/product';

class CartLocalStorageStore implements Cart {
  public products: Product[] = [];

  constructor() {
    this.products = (JSON.parse(localStorage.getItem('cartItems') as string) ??
      []) as Product[];
  }

  public getProducts() {
    return this.products;
  }

  public setProducts(products: Product[]) {
    this.products = products;
    localStorage.setItem('cartItems', JSON.stringify(products));

    console.log('Cart updated', {
      products,
    });
  }
}

export const cartLocalStorageStore = new CartLocalStorageStore();

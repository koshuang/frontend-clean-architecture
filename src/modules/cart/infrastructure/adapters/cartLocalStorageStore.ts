import { Cart } from '@cart/domain/entities/Cart';

class CartLocalStorageStore {
  public cart: Cart = Cart.create();

  constructor() {
    const cart = JSON.parse(localStorage.getItem('cart') as string);

    this.cart = Cart.create(cart?.products ?? []);
  }

  public getCart() {
    return this.cart;
  }

  public save(cart: Cart) {
    this.cart = cart;
    localStorage.setItem('cart', JSON.stringify(cart));
  }
}

export const cartLocalStorageStore = new CartLocalStorageStore();

const API_KEY = 'cartsKey';

export function addCart(cart) {
    const carts = getCarts();
    carts.push(cart);
    localStorage.setItem(API_KEY, JSON.stringify(carts));
}

export function getCarts() {
  return JSON.parse(localStorage.getItem(API_KEY)) ?? [];
}
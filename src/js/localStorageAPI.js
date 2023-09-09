export function addCart(cart) {
    const carts = JSON.parse(localStorage.getItem('cartsKey')) ?? [];
    carts.push(cart);
    localStorage.setItem('cartsKey', JSON.stringify(carts));

}
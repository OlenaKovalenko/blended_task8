export function createCart() {
    const cart = {};

    new FormData(event.currentTarget).forEach((value, name) => {
        cart[name] = value;
        
    })
    return cart;
}
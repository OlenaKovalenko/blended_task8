import { nanoid } from "nanoid";

export function createCart() {
    const cart = {id:nanoid()};

    new FormData(event.currentTarget).forEach((value, name) => {
        cart[name] = value;  
    })
    return cart;
}
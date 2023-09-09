import { addCart } from './localStorageAPI';
import { createCart } from './createCart';
import { renderCard } from './renderCard';

export function onFormSubmit(event) {
  event.preventDefault();

  const cart = createCart();
  addCart(cart);
  renderCard(cart);
  event.currentTarget.reset();
}
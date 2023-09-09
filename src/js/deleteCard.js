import { removeCart } from './localStorageAPI';

export function deleteCard(event) {

  if (!event.target.classList.contains("js-del")) {
    return;
  }

  const li = event.target.closest(".task-list-item");
  const id = li.dataset.id;
  
  li.remove();

  removeCart(id);
}
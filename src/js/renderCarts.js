import { refs } from './refs';
import { getCarts } from './localStorageAPI';

export function renderCarts() {
  const items = getCarts();
  const markup = items.map(item => {
    return `<li class="task-list-item" data-id=${item.id}>
              <button class="task-list-item-btn js-del">Удалить</button>
              <h3>${item.taskName}</h3>
              <p>${item.taskText}</p>
            </li>`;
  });
  refs.list.innerHTML = markup.join('');
}

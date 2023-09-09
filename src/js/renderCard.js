import { refs } from './refs';

export function renderCard(cart) {
  const markup = `<li class="task-list-item" data-id=${cart.id}>
              <button class="task-list-item-btn js-del">Удалить</button>
              <h3>${cart.taskName}</h3>
              <p>${cart.taskText}</p>
            </li>`;
  refs.list.insertAdjacentHTML('beforeend', markup);
}

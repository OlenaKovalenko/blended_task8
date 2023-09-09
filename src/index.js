/**
 * Створи список справ.
 * На сторінці є два інпути які має вводиться назва і текст задачі.
 * Після натискання на кнопку "Додати" завдання додається до списку #task-list.
 *
 * Розмітка картки задачі
 * <li class="task-list-item">
 *     <button class="task-list-item-btn">Удалить</button>
 *     <h3>Заголовок</h3>
 *     <p>Текст</p>
 * </li>
 *
 * У кожної картки має бути кнопка "Видалити", щоб можна було
 * прибрати завдання зі списку.
 * Список із завданнями має бути доступним після перезавантаження сторінки.
 */

import { refs } from './js/refs';
import { addCart, removeCart } from './js/localStorageAPI';
import { createCart } from './js/createCart';
import { renderCarts } from './js/renderCarts';
import { renderCard } from './js/renderCard';
import { deleteCard } from './js/deleteCard';

refs.form.addEventListener('submit', onFormSubmit);
renderCarts();

function onFormSubmit(event) {
  event.preventDefault();

  const cart = createCart();
  addCart(cart);
  renderCard(cart);
  event.currentTarget.reset();
}

refs.list.addEventListener("click", deleteCard);


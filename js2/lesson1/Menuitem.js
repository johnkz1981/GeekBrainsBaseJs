"use strict";

/** Class для создания элементов меню. */
class MenuItem {
  /**
   * Создать li элемент.
   * @param {string} href - Ссылка html.
   * @param {string} title - Описание ссылкы.
   */
  constructor(href, title) {
    this.href = href;
    this.title = title;
  }

  /**
   * Прорисовка li элемента.
   * @return {HTMLElement} result - Контейнер li (DOM элемент).
   */
  renderItem() {
    return `<li><a href="${this.href}">${this.title}</a></li>`;
  }
}
"use strict";

/**
 * 1. Улучшить базовый класс, добавив в него общий для всех метод remove(),
 *  который удаляет контейнер.
 * 2. Создать наследника класса Menu – новый класс должен уметь строить меню со вложенными пунктами,
 *  т.е с подменю. Подсказка: главный секрет – в обходе объекта пунктов меню и проверке типов.
 */

/** Class для создания меню. */
class Menu {
  /**
   * Создать меню.
   * @param {string} id - Уникальный идентификатор меню.
   * @param {string} className - Названия класса меню.
   * @param {MenuItem} items - Элементы меню.
   */
  constructor(id, className, items) {
    this.id = id;
    this.className = className;
    this.items = items;
  }

  /**
   * Прорисовка меню.
   * @return {HTMLElement} result - Контейнер меню (DOM элемент).
   */
  render() {
    let result = `<ul class="${this.className}" id="${this.id}">`;
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i] instanceof MenuItem) {
        result += this.items[i].renderItem();
      }
    }
    result += "</ul>";
    return result;
  }

  /**
   * Удаление контейнера меню
   * @param {HTMLElement} containerMenu - Контейнер меню (DOM элемент).
   * @return {void}
   */
  remove() {
    const containerMenu = document.querySelectorAll(`.${this.className}`);

    for (const itemContainer of containerMenu) {
      itemContainer.remove();
    }
  }
}

/**
 * Class для создания меню
 * @extends Menu
 */
class SubMenu extends Menu {
  /**
   * Создать меню.
   * @param {string} id - Уникальный идентификатор меню.
   * @param {string} className - Названия класса меню.
   * @param {MenuItem|Menu} items - Элементы меню.
   */
  constructor(id, className, items) {
    super(id, className, items);
  }

  /**
   * Прорисовка меню.
   * @return {HTMLElement} result - Контейнер меню (DOM элемент).
   */
  render() {
    let result = `<ul class="${this.className}" id="${this.id}">`;
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i] instanceof MenuItem) {
        result += this.items[i].renderItem();
      } else {
        result += this.items[i].render();
      }
    }
    result += "</ul>";
    return result;
  }
}
"use strict";
/**
 * @property {HTMLElement} gameContainerEl Контейнер игры (DOM элемент).
 */
const chess = {
  gameContainerEl: document.getElementById("game"),
  /**
   * Метод отображения карты (игрового поля).
   */
  renderMap() {},
  /**
   * Определяет является ли ячейка черной.
   * @param {int} rowNum Номер в строке.
   * @param {int} colNum Номер в колонке.
   * @returns {boolean} true, если ячейка должна быть черной, иначе false.
   */
  isCellIsBlack(rowNum, colNum) {}
};
// Запускаем метод отображения карты.
chess.renderMap();

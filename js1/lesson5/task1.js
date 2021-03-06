"use strict";
/**
 * @property {HTMLElement} gameContainerEl Контейнер игры (DOM элемент).
 */
const chess = {
  gameContainerEl: document.getElementById("game"),
  /**
   * Метод отображения карты (игрового поля).
   * @param {string} renderString переменная для прорисовки таблицы
   * @param {array} color цвет яцейки
   */
  renderMap() {
    const color = ["black", "white"];
    let renderString = this.getHead();

    for (let rowNum = 0, i = 8; rowNum < 8; rowNum++, i--) {
      renderString += `<tr><td>${i}`;

      for (let colNum = 0; colNum < 8; colNum++) {
        let getColor = this.isCellIsBlack(rowNum, colNum);
        renderString += `<td class=${color[getColor]} data-row="${rowNum}" data-num="${colNum}"></td>`;
      }
      renderString += `</td><td>${i}</td></tr>`;
    }
    this.gameContainerEl.innerHTML = renderString + this.getHead();
  },

  /**
   * Определяет является ли ячейка черной.
   * @param {int} rowNum Номер в строке.
   * @param {int} colNum Номер в колонке.
   * @returns {int} 0, если ячейка должна быть черной, иначе 1.
   */
  isCellIsBlack(rowNum, colNum) {
    return (rowNum % 2 === 0) ^ (colNum % 2 === 1);
  },

  /**
   * Прорисвока алфавита вначале и в конце доски
   * @param {array} alfa массив с алфвитом
   * @param {string} renderString переменная для прорисовки таблицы
   * @returns {string} 'abcd.....'.
   */
  getHead() {
    const alfa = ["a", "b", "c", "d", "e", "f", "g", "h"];
    let renderString = "<tr><td></td>";
    for (const i in alfa) {
      renderString += `<td>${alfa[i]}</td>`;
    }
    return (renderString += "<td></td></tr>");
  }
};
// Запускаем метод отображения карты.
chess.renderMap();

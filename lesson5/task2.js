"use strict";
/**
 * @property {HTMLElement} gameContainerEl Контейнер игры (DOM элемент).
 */
const chess = {
  gameContainerEl: document.getElementById("game"),
  alfa: ["a", "b", "c", "d", "e", "f", "g", "h"],
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
        let pos = `${this.alfa[colNum]}${i}`;
        renderString += `<td class=${
          color[getColor]
        } data-pos="${pos}">${this.getFigure(pos)}</td>`;
      }
      renderString += `</td><td>${i}</td></tr>`;
    }
    this.gameContainerEl.innerHTML = renderString + this.getHead();
  },

  /**
   * Определяет является ли ячейка с фигурой.
   * @param {string} Позиция фигуры.
   * @returns {string} возвращает код фигуры.
   */
  getFigure(pos) {
    return this.figures[pos] === undefined ? "" : this.figures[pos].code;
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
    let renderString = "<tr><td></td>";

    for (const i in this.alfa) {
      renderString += `<td>${this.alfa[i]}</td>`;
    }
    return (renderString += "<td></td></tr>");
  },

  /**
   * @property {object} Код поля ключ, значение код фигуры.
   */
  figures: {
    a1: { code: "&#9814;" },
    b1: { code: "&#9816;" },
    c1: { code: "&#9815;" },
    d1: { code: "&#9813;" },
    e1: { code: "&#9812;" },
    f1: { code: "&#9815;" },
    g1: { code: "&#9816;" },
    h1: { code: "&#9814;" },
    a2: { code: "&#9817;" },
    b2: { code: "&#9817;" },
    c2: { code: "&#9817;" },
    d2: { code: "&#9817;" },
    e2: { code: "&#9817;" },
    f2: { code: "&#9817;" },
    g2: { code: "&#9817;" },
    h2: { code: "&#9817;" },
    a7: { code: "&#9823;" },
    b7: { code: "&#9823;" },
    c7: { code: "&#9823;" },
    d7: { code: "&#9823;" },
    e7: { code: "&#9823;" },
    f7: { code: "&#9823;" },
    g7: { code: "&#9823;" },
    h7: { code: "&#9823;" },
    a8: { code: "&#9820;" },
    b8: { code: "&#9822;" },
    c8: { code: "&#9821;" },
    d8: { code: "&#9819;" },
    e8: { code: "&#9818;" },
    f8: { code: "&#9821;" },
    g8: { code: "&#9822;" },
    h8: { code: "&#9820;" }
  }
};
// Запускаем метод отображения карты.
chess.renderMap();

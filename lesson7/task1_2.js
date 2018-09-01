/**
 * Объект счетчика. Подсчитывает очки пользователя.
 * @property {int} count Очки пользователя.
 * @property {HTMLElement} countEl DOM-элемент для вставки числа отображающего
 * количество очков пользователя.
 */
const score = {
  count: null,
  countEl: null,

  /**
   * Инициализацирует счетчик.
   */
  init() {
    // Находим элемент где будут отображаться очки пользователя
    // и записываем в свойство countEl.
    // Вызываем метод drop текущего объекта чтоб сбросить счетчик.
    this.countEl = document.getElementById("score-count");
    this.drop();
  },

  /**
   * Инкрементирует счетчик.
   */
  increment() {
    // Инкрементируем счет пользователя
    // Вызываем метод render текущего объекта
    this.count++;
    this.render();
  },

  /**
   * Сбрасывает счетчик.
   */
  drop() {
    // Ставим счет в 0.
    // Вызываем метод render текущего объекта
    this.count = 0;
    this.render();
  },

  /**
   * Отображает количество очков пользователю.
   */
  render() {
    // Отображаем счет пользователя в DOM-элемент.
    this.countEl.textContent = this.count;
  }
};

/**
 * Объект счетчика. Подсчитывает очки пользователя.
 * @property {int} count Очки пользователя.
 * @property {HTMLElement} countEl DOM-элемент для вставки числа отображающего
 * количество очков пользователя.
 */
const transformNextStep = {
  snakePoint: null,
  colsCount: null,
  rowsCount: null,

  init(objPointColsRows) {
    this.snakePoint = objPointColsRows.snakePoint;
    this.colsCount = objPointColsRows.colsCount;
    this.rowsCount = objPointColsRows.rowsCount;
  },
  isLimitPoint() {
    return (
      this.snakePoint.x === -1 ||
      this.snakePoint.y === -1 ||
      this.snakePoint.x === this.colsCount ||
      this.snakePoint.y === this.rowsCount 
    );
  },
  getNewPoint() {
    if (this.snakePoint.x === -1) {
      this.snakePoint.x = this.colsCount - 1;
    } else if (this.snakePoint.y === -1) {
      this.snakePoint.y = this.rowsCount - 1;
    } else if (this.snakePoint.x === this.colsCount) {
      this.snakePoint.x = 0;
    } else if (this.snakePoint.y === this.rowsCount ) {
      this.snakePoint.y = 0;
    }

    return this.snakePoint;
  }
};

/**
 * @property {object} settings Настройки корзины товаров.
 * @property {{price: number, name: string}[]} goods Список товаров что купил пользователь.
 * @property {HTMLElement} basketCountEl Место для показа количества товаров.
 * @property {HTMLElement} basketPriceEl Место для показа цены всех товаров.
 */
const basket = {
  settings: {
    countSelector: "basket-count",
    priceSelector: "basket-price"
  },
  goods: [],
  countEl: null,
  priceEl: null,

  /**
   * Инициализирует переменные для корзины и показывает эти значения.
   */
  init(settings = {}) {
    this.settings = settings;
    elementsClick = document.querySelectorAll(".buy-btn");
    this.countEl = document.getElementById(this.settings.countSelector);
    this.priceEl = document.getElementById(this.settings.priceSelector);

    for (const elemClick of elementsClick) {
      elemClick.addEventListener("click", event =>
        this.add(event.target.dataset.name, event.target.dataset.price)
      );
    }
    this.render();
  },

  /**
   * Отображает количество всех товаров и их цену.
   */
  render() {
    this.priceEl.innerText = this.getGoodsPrice();
    this.countEl.innerText = this.goods.length;
  },

  /**
   * Считает и возвращает цену всех купленных товаров из массива this.goods.
   * @returns {number} Цену всех купленных товаров.
   */
  getGoodsPrice() {
    let sum = 0;

    for (const good of this.goods) {
      sum += good.price;
    }
    return sum;
  },

  /**
   * Добавляет купленный товар в массив купленных товаров и отображает количество и цену всех товаров.
   * @param goodName Название товара.
   * @param goodPrice Цена товара.
   */
  add(goodName, goodPrice) {
    this.goods.push({ price: +goodPrice, name: goodName });
    this.render();
  }
};

//Инициализация программы
basket.init({
  countSelector: "basket-count",
  priceSelector: "basket-price"
});

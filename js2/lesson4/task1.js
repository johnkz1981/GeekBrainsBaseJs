'use strict';

/** Class для создания Табуляции. */
class Tabs {
  /**
   * Создает табуляцию.
   * @param {string} contents - Класс для контента с описанием Lorem.
   * @param {string} caption - Класс UL табулятор.
   * @param {int} length - длина массива.
   * @param {elemAction} elemAction - Вспомагательный класс для элементов.
   */
  constructor(contents, caption) {
    this.contents = document.querySelectorAll(contents);
    this.caption = document.querySelector(caption);
    this.length = this.caption.childElementCount;
    this.elemAction = new elemAction([this.caption.children, this.contents]);
    this.render();
  }

  // Прорисовка нумерации элементов и навешивание событий
  render() {
    for (let i = 0; i < this.length; i++) {
      this.elemAction.setAttribute(i);
      this.caption.children[i].addEventListener('click', evt => {
        this.toggleActive(evt);
      })
    }
  }

  // Переключает active
  toggleActive(evt) {
    const id = evt.target.dataset.id;
    for (let i = 0; i < this.length; i++) {
      this.elemAction.remove(i);
    }
    this.elemAction.add(id);
  }
}

/** Class для переключения active и добавления аттрибутов */
class elemAction {
  /**
   * Создает табуляцию.
   * @param {Array} elms - Массив HTML элементов.
   */
  constructor(elms) {
    this.elems = elms;
  }

  // Добавляет класс
  add(id) {
    this.elems.forEach((elem) => {
      elem[id].classList.add("active");
    })
  }

  // Удаляет класс
  remove(id) {
    this.elems.forEach((elem) => {
      elem[id].classList.remove("active");
    })
  }

  // Устанавливает аттрибут
  setAttribute(id) {
    this.elems.forEach((elem) => {
      elem[id].setAttribute('data-id', id);
    })
  }
}


new Tabs('.tabs__content', '.tabs__caption');
new Tabs('.tabs__content_vertical', '.tabs__caption_vertical');
"use strict";

/**
 * Объект для валидации формы
 * @property {NodeListOf<HTMLElement>} name: Поле с наменованием;
 * @property {NodeListOf<HTMLElement>} phone: Полес с вводом телефона;
 * @property {NodeListOf<HTMLElement>} password: Поле для ввода пароля;
 * @property {NodeListOf<HTMLElement>} password_repeat: Поле для повтора ввода пароля;
 */
const validationForm = {
  name: document.getElementsByName("name"),
  phone: document.getElementsByName("phone"),
  password: document.getElementsByName("password"),
  password_repeat: document.getElementsByName("password_repeat"),

  /**
   * Инициализация программы
   */

  init() {
    document.querySelector("form").addEventListener("click", event => {
      if (event.target.nodeName === "INPUT") return;
      event.preventDefault();
      this.isNameValidate(this.name[0]);
      this.isPhoneValidate(this.phone[0]);
      this.isPasswordValidate(this.password[0]);
      this.isPasswordRepeatValidate(this.password[0], this.password_repeat[0]);
    });
  },

  /**
   * Валидация имени
   * @param {<HTMLElement>} name: Поле с наменованием;
   * @returns {boolean}
   */
  isNameValidate(name) {
    const bool = name.value.length > 0 && name.value.length < 51;
    this.addOrRemoveClass(name, bool);
    return bool;
  },

  /**
   * Валидация телефона
   * @param {<HTMLElement>} name: Поле с номером телефона;
   * @returns {boolean}
   */
  isPhoneValidate(phone) {
    const bool = phone.value.length === 11;
    this.addOrRemoveClass(phone, bool);
    return bool;
  },

  /**
   * Валидация пароля
   * @param {<HTMLElement>} name: Поле с паролем;
   * @returns {boolean}
   */
  isPasswordValidate(password) {
    const bool = password.value.length > 4 && password.value.length < 51;
    this.addOrRemoveClass(password, bool);
    return bool;
  },

  /**
   * Валидация подтверждения пароля
   * @param {<HTMLElement>} password: Поле с паролем;
   * @param {<HTMLElement>} password_repeat: Поле с подтверждением пароля;
   * @returns {boolean}
   */
  isPasswordRepeatValidate(password, password_repeat) {
    const bool = password.value === password_repeat.value;
    this.addOrRemoveClass(password_repeat, bool);
    return bool;
  },

  /**
   * Удаление и добавление класса также вывода ошибки
   * @param {<HTMLElement>} elem: элемент HTML;
   * @param {boolean} Возврат результата валидации;
   * @returns {void}
   */
  addOrRemoveClass(elem, bool) {
    let selector = document.querySelector(`.${elem.name}-danger`);

    if (bool) {
      elem.classList.remove("form-control-danger");
      selector.innerText = "";
    } else {
      elem.classList.add("form-control-danger");
      selector.innerText = this.dangerText[elem.name];
    }
  },

  /**
   * Объект для вывода сообщений
   * @property {object} dangerText: сообщения;
   */
  dangerText: {
    name: "Имя - должно содержать как минимум 1 символ, не более 50 символов.",
    phone: "Телефон - должно содержать 11 цифр",
    password: "Пароль - минимум 5 символов, максимум 50",
    password_repeat: "Повтор пароля - значение должно совпадать с полем пароль."
  }
};

validationForm.init();

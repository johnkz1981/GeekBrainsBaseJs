"use strict";

class ValidationForm {
  /**
   * Конструктор навешивает события на отправку формы.
   * @param {<HTMLElement>} name: Поле с именем;
   * @param {<HTMLElement>} phone: Поле с номером телефона;
   * @param {<HTMLElement>} email: Поле с E-mail;
   * @param {<HTMLElement>} content: Поле с текстовым полем;
   */
  constructor() {
    this.name = document.getElementsByName("name");
    this.phone = document.getElementsByName("phone");
    this.email = document.getElementsByName("email");
    this.content = document.getElementsByName("content");

    document.querySelector("form").addEventListener("click", event => {
      if (event.target.nodeName === "INPUT") {
        return;
      }
      if (!this.isValidate()) {
        event.preventDefault();
      }
    });
  }

  /**
   * Валидация имени
   * @returns {boolean}
   */
  isNameValidate(name) {
    const bool = /^[A-Z][a-z]{1,30}$/.test(name.value);
    this.addOrRemoveClass(name, bool);
    return bool;
  }

  /**
   * Валидация телефона
   * @returns {boolean}
   */
  isPhoneValidate(phone) {
    const bool = /^\+7\(\d{3}\)\d{3}\-\d{4}$/.test(phone.value);
    this.addOrRemoveClass(phone, bool);
    return bool;
  }

  /**
   * Валидация E-mail
   * @returns {boolean}
   */
  isEmailValidate(email) {
    const bool = /^\w+@mail\.(ru|com)$/.test(email.value);
    this.addOrRemoveClass(email, bool);
    return bool;
  }

  /**
   * Валидация текстового поля.
   * @returns {boolean}
   */
  isTextValidate(content) {
    const bool = /[A-Z].+/.test(content.value);
    this.addOrRemoveClass(content, bool);
    return bool;
  }

  /**
   * Валидация формы
   * @returns {boolean}
   */
  isValidate() {
    return this.isNameValidate(this.name[0]) ||
        this.isPhoneValidate(this.phone[0]) ||
        this.isEmailValidate(this.email[0]) ||
        this.isTextValidate(this.content[0]);
  }

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
      selector.innerText = this.getDangerText(elem.name);
    }
  }

  /**
   * Возвращает ошибку.
   * @param {object} dangerText: сообщения с ошибками;
   */
  getDangerText(text) {
    const dangerText = {
      name: "Имя - содержит только буквы.",
      phone: "Телефон - подчиняется шаблону +7(000)000-0000.",
      email: "E-mail - должен начинаться с любого слова содержать @ и заканчиваться на mail.ru или mail.com ",
      content: "Текст - произвольный текст.",
    };
    return dangerText[text];
  }
}

new ValidationForm();


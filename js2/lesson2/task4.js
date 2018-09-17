/** Class для JSON запроса пути картинки. */
class JsonReqest {
  /**
   * Конструтор принимает настройки пользователя и изменяет настройки по умолчанию.
   * Объевляет HTML элементы и навешивает события.
   * @param {Object} settings. Настройки по умолчанию.
   * @param {string} btnSuccess. Название для класса btn success.
   * @param {string} btnError. Название для класса btn error.
   * @param {string} message. Название для класса вывода информации.
   * @param {string} messageSuccess. Сообщение при успешном Ajax запросе.
   * @param {string} messageError. Сообщение при ошибке Ajax запросе.
   * @param {string} pathSuccess. Путь к файлу для JSON запроса.
   * @param {string} pathError. Путь к файлу для JSON запроса(Несуществующий).
   * @param {HTMLElement} btnSuccess. Btn для успешного вызова.
   * @param {HTMLElement} btnError. Btn для ошибочного вызова.
   * @param {HTMLElement} message. Div для сообщений вывода.
   */
  constructor(userSettings = {}) {
    const settings = {
      btnSuccess: "btn-success",
      btnError: "btn-error",
      message: "message",
      messageSuccess: "Успешно!",
      messageError: "Ошибка!",
      pathSuccess: "task3.json",
      pathError: "task4.json"
    };

    Object.assign(settings, userSettings);

    this.btnSuccess = settings.btnSuccess;
    this.btnError = settings.btnError;
    this.message = settings.message;
    this.messageSuccess = settings.messageSuccess
    this.messageError = settings.messageError;
    this.pathSuccess = settings.pathSuccess;
    this.pathError = settings.pathError;

    const btnSuccess = document.getElementById(this.btnSuccess);
    const btnError = document.getElementById(this.btnError);
    this.message = document.getElementById(this.message);

    btnSuccess.addEventListener("click", () => {
      this.getPathMaxImg(this.pathSuccess);
    });
    btnError.addEventListener("click", () => {
      this.getPathMaxImg(this.pathError);
    });
  }

  /**
   * Метод для поиска пути болшой картинки в JSON файле в Ajax запросе
   * @param {string} pathJson. Путь к JSON файлу
   */
  getPathMaxImg(pathJson) {

    fetch(pathJson)
        .then(result => {
          console.log(result.status);
          if (result.status === 200) {
            this.message.innerText = this.messageSuccess;
            this.message.className = 'success';
          } else {
            this.message.innerText = this.messageError
            this.message.className = 'error';
          }
          return result.json();
        })
        .then(data => {
          console.log(data)
        })
        .catch(error => console.log(error));
  }
}

/**
 * Объект принимает настройки пользователя и изменяет настройки по умолчанию.
 * @property {string} btnSuccess. Название для класса btn success.
 * @property {string} btnError. Название для класса btn error.
 * @property {string} message. Название для класса вывода информации.
 * @property {string} messageSuccess. Сообщение при успешном Ajax запросе.
 * @property {string} messageError. Сообщение при ошибке Ajax запросе.
 * @property {string} pathSuccess. Путь к файлу для JSON запроса.
 * @property {string} pathError. Путь к файлу для JSON запроса(Несуществующий).
 */
const userSettings = {
  messageSuccess: "Супер!",
  pathError: "task5.json"
};

new JsonReqest(userSettings);
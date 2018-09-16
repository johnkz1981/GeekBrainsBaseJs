
class JsonReqest {
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

const userSettings = {
  messageSuccess: "Супер!",
  pathError: "task5.json"
};

new JsonReqest(userSettings);


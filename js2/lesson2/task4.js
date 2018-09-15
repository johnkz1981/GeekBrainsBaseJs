const btnSuccess = document.getElementById('btn-success')
const btnError = document.getElementById('btn-error');
const message = document.getElementById('message');

btnSuccess.addEventListener("click", () => {
  getPathMaxImg('task3.json');
});
btnError.addEventListener("click", () => {
  getPathMaxImg('task4.json');
});

function getPathMaxImg(pathJson) {

  fetch(pathJson)
      .then(result => {
        console.log(result.status);
        if (result.status === 200) {
          message.innerText = "Успешно!"
        } else {
          message.innerText = "Ошибка!"
        }
        return result.json();
      })
      .then(data => {
        console.log(data)
      })
      .catch(error => console.log(error));
}

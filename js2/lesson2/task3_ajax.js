/**
 * Метод для поиска пути болшой картинки в JSON файле в Ajax запросе
 * @param {string} img. Путь к JSON файлу
 */
function getPathMaxImg(img) {

  fetch('task3.json')
      .then(result => {
        return result.json();
      })
      .then(data => {
        gallery.openImage(data[img].src)
        return data[img].src;
      })
      .catch(error => console.log(error));
}

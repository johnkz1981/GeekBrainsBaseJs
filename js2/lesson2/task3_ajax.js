function getPathMaxImg(img) {

    const hrf = fetch('task3.json')
        .then(result => {
            //console.log(result);
            return result.json();
        })
        .then(data => {
          gallery.openImage(data[img].src)
            return data[img].src;
        })
        .catch(error => console.log(error));
}

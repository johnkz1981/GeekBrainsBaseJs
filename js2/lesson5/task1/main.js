$(document).ready(() => {
  let product1 = new Product(123, 'Ноутбук', 45600);
  let product2 = new Product(124, 'Клавиатура', 1200);
  let product3 = new Product(125, 'Мышь для ПК', 600);

  let mycart = new Cart('getCart.json');
  $('.buyBtn').click(e => {
    mycart._addProduct(e.target);
  });

  const dragManager = new DragManager(mycart);

  dragManager.onDragCancel = function(dragObject) {
    dragObject.avatar.rollback();
  };

  dragManager.onDragEnd = function(dragObject, dropElem) {
    dragObject.elem.style.display = 'none';
    dropElem.classList.add('computer-smile');
    setTimeout(function() {
      dropElem.classList.remove('computer-smile');
    }, 200);
  };
});
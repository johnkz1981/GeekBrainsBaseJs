'use strict';

function DragManager (objCart) {

  let dragObject = {};
  let cart = null;
  let elem = null;
  const self = this;
  let isMouseOnCart = false;
  this.objCart = objCart;

  function onMouseDown(e) {

    if (e.which != 1) return;

    const elem = e.target.closest('.draggable');
    if (!elem) return;

    dragObject.elem = elem;

    // запомним, что элемент нажат на текущих координатах pageX/pageY
    dragObject.downX = e.pageX;
    dragObject.downY = e.pageY;
    cart = document.querySelector('.droppable');
    return false;
  }

  function onMouseMove(e) {
    if (!dragObject.elem) return; // элемент не зажат

    if (!dragObject.avatar) { // если перенос не начат...
      const moveX = e.pageX - dragObject.downX;
      const moveY = e.pageY - dragObject.downY;

      // если мышь передвинулась в нажатом состоянии недостаточно далеко
      if (Math.abs(moveX) < 3 && Math.abs(moveY) < 3) {
        return;
      }

      // начинаем перенос
      dragObject.avatar = createAvatar(e); // создать аватар
      if (!dragObject.avatar) { // отмена переноса, нельзя "захватить" за эту часть элемента
        dragObject = {};
        return;
      }

      // аватар создан успешно
      // создать вспомогательные свойства shiftX/shiftY
      const coords = getCoords(dragObject.avatar);
      dragObject.shiftX = dragObject.downX - coords.left;
      dragObject.shiftY = dragObject.downY - coords.top;

      startDrag(e); // отобразить начало переноса
    }

    // отобразить перенос объекта при каждом движении мыши
    dragObject.avatar.style.left = e.pageX - dragObject.shiftX + 'px';
    dragObject.avatar.style.top = e.pageY - dragObject.shiftY + 'px';

    elem = document.elementFromPoint(e.clientX, e.clientY);

    isCart();
    return false;
  }

  function onMouseUp(e) {
    if(isMouseOnCart){
      objCart._addProduct(dragObject.elem);
    }
    if (dragObject.avatar) { // если перенос идет
      finishDrag(e);
    }
    // перенос либо не начинался, либо завершился
    // в любом случае очистим "состояние переноса" dragObject
    //elem = document.elementFromPoint(e.clientX, e.clientY);
    if (Object.keys(dragObject).length !== 0) {
      isCart();
    }

    dragObject = {};
  }

  function finishDrag(e) {
    const dropElem = findDroppable(e);

    if (!dropElem) {
      self.onDragCancel(dragObject);
    } else {
      self.onDragEnd(dragObject, dropElem);
    }
  }

  function createAvatar(e) {

    // запомнить старые свойства, чтобы вернуться к ним при отмене переноса
    const avatar = dragObject.elem;
    const old = {
      parent: avatar.parentNode,
      nextSibling: avatar.nextSibling,
      position: avatar.position || '',
      left: avatar.left || '',
      top: avatar.top || '',
      zIndex: avatar.zIndex || ''
    };

    // функция для отмены переноса
    avatar.rollback = function () {
      old.parent.insertBefore(avatar, old.nextSibling);
      avatar.style.position = old.position;
      avatar.style.left = old.left;
      avatar.style.top = old.top;
      avatar.style.zIndex = old.zIndex
    };

    return avatar;
  }

  function startDrag(e) {
    const avatar = dragObject.avatar;

    // инициировать начало переноса
    document.body.appendChild(avatar);
    avatar.style.zIndex = 9999;
    avatar.style.position = 'absolute';
  }

  function findDroppable(event) {
    // спрячем переносимый элемент
    //dragObject.avatar.hidden = true;

    // получить самый вложенный элемент под курсором мыши
    elem = document.elementFromPoint(event.clientX, event.clientY);

    //isCart(elem, cart);

    if (elem == null) {
      // такое возможно, если курсор мыши "вылетел" за границу окна
      return null;
    }

    return elem.closest('.droppable');
  }

  function isCart(isUp = false) {//console.log( dragObject.elem)
    const top = dragObject.elem.offsetTop;
    const width = dragObject.elem.offsetWidth;
    const left = dragObject.elem.offsetLeft;
    const height = dragObject.elem.offsetHeight;
    const cartTop = cart.offsetTop;
    const cartWidth = cart.offsetWidth;
    const cartLeft = cart.offsetLeft;
    const cartHeight = cart.offsetHeight;
    //const  показать переносимый элемент обратно
    //dragObject.avatar.hidden = false;
    if ((((left + width) || left) > cartLeft && cartWidth + cartLeft > left) && (((top + height) || top) > cartTop && cartHeight + cartTop > top)) {
      cart.classList.add('border__cart');
      isMouseOnCart = true;
    }
    else {
      cart.classList.remove('border__cart');
      isMouseOnCart = false;
    }
    if(isMouseOnCart){
      //console.log(1);
    }
  }

  document.onmousemove = onMouseMove;
  document.onmouseup = onMouseUp;
  document.onmousedown = onMouseDown;

  this.onDragEnd = function (dragObject, dropElem) {
  };
  this.onDragCancel = function (dragObject) {
  };

};

function getCoords(elem) {
  const box = elem.getBoundingClientRect();

  return {
    top: box.top + pageYOffset,
    left: box.left + pageXOffset
  };
}
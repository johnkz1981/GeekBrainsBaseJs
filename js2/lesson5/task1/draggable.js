'use strict';

class Draggable {
  constructor() {
    this.product = document.querySelector('.product');
    this.cart = document.querySelector('.cart-items-wrap');
    this.addEvent(this.product);
  }

  addEvent(elem){
    // записываем обработчик, если нужно потом отменить привязку
    this.mouseDownHandler = event => this.mousedown(event);
    elem.addEventListener("mousedown", this.mouseDownHandler);

    elem.addEventListener("mouseup", (event) => {
      this.mouseup(event)
    });

    elem.addEventListener("dragstart", () => {
      return false;
    });

    document.addEventListener("dragend", function( event ) {
      //console.log(event);
    }, false);
  }

  mousedown(evt) {
    new Product(this.product.dataset.id,
        this.product.dataset.name,
        this.product.dataset.price,
        this.product.dataset.img,
    );

    this.newProduct = this.product.parentNode.lastChild;
    this.product.parentNode.insertBefore(this.product.parentNode.lastChild, this.product.nextElementSibling);
    const coords = this.getCoords(this.product);
    this.shiftX = evt.pageX - coords.left;
    this.shiftY = evt.pageY - coords.top;

    this.product.style.position = 'absolute';
    //this.product.parentNode.appendChild(this.product);
    this.moveAt(evt);

    this.product.style.zIndex = 1000;

    this.mouseDownHandlerDoc = event => this.documentMouseMove(event);
    document.addEventListener("mousemove", this.mouseDownHandlerDoc);

  }

  documentMouseMove(event) {
    this.product.style.left = event.pageX - this.shiftX + 'px';
    this.product.style.top = event.pageY - this.shiftY + 'px';
  }

  mouseup(event) {
    console.dir(this.cart.offsetTop);
    console.dir(this.cart.offsetWidth);
    console.dir(this.cart.offsetLeft);
    console.dir(this.cart.offsetHeight);
    console.dir(this.product.offsetTop);
    console.dir(this.product.offsetWidth);
    console.dir(this.product.offsetLeft);
    console.dir(this.product.offsetHeight);

    document.removeEventListener("mousemove", this.mouseDownHandlerDoc);
    //this.product.removeEventListener("mousedown", this.mouseDownHandler);
    this.newProduct.remove();
    this.product.style.position = 'static';
  }

  moveAt(evt) {
    this.product.style.left = evt.pageX - this.shiftX + 'px';
    this.product.style.top = evt.pageY - this.shiftY + 'px';
  }

  getCoords(elem) {
    const box = elem.getBoundingClientRect();
    return {
      top: box.top + pageYOffset,
      left: box.left + pageXOffset
    };
  }
}
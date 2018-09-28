'use strict';

class Review {
  constructor() {
    this._init()
  }

  _init() {
    const submit = document.querySelector('button');
    const select = document.querySelector('select');

    submit.addEventListener('click', evt => {
      evt.preventDefault();
      this._request(select.value);
    })
  }

  _request(request) {
    const requestPath = `https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/${request}`;

    fetch(requestPath)
        .then(result => result.json())
        .then(data => {
          /*for (let product of data.contents) {
            this.cartItems.push(product);
            this._renderItem(product);
          }
          this.countGoods = data.countGoods;
          this.amount = data.amount;
          this._renderSum(data.amount, data.countGoods);*/
          console.log(data);
        })
        .catch(error => console.log(error));
  }
}
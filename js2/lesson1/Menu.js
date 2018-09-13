"use strict";

class Menu {
  constructor(id, className, items) {
    this.id = id;
    this.className = className;
    this.items = items;
  }

  render() {
    let result = `<ul class="${this.className}" id="${this.id}">`;
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i] instanceof MenuItem) {
        result += this.items[i].renderItem();
      }
    }
    result += "</ul>";
    return result;
  }

  remove() {
    const containerMenu = document.querySelectorAll(`.${this.className}`);
    
    for(const itemContainer of containerMenu){
      itemContainer.remove();
    }
  }
}

class SubMenu extends Menu {
  constructor(id, className, items) {
    super(id, className, items);
  }

  render() {
    let result = `<ul class="${this.className}" id="${this.id}">`;
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i] instanceof MenuItem) {
        result += this.items[i].renderItem();
      } else {
        result += this.items[i].render();
      }
    }
    result += "</ul>";
    return result;
  }
}
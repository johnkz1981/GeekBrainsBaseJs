"use strict";

/**
 * Сеть фастфудов предлагает несколько видов гамбургеров:
 *  маленький(50 рублей, 20 калорий);
 *  большой(100 рублей, 40 калорий).
 * Гамбургер может быть с одним из нескольких видов начинок(обязательно):
 *  сыром(+ 10 рублей, + 20 калорий);
 *  салатом(+ 20 рублей, + 5 калорий);
 *  картофелем(+ 15 рублей, + 10 калорий).
 *
 * Дополнительно гамбургер можно посыпать приправой(+ 15 рублей, 0 калорий) и полить майонезом(+ 20 рублей, + 5 калорий).
 * Напишите программу, рассчитывающую стоимость и калорийность гамбургера.
 * Используйте ООП - подход(подсказка: нужен класс Гамбургер, константы, методы для выбора опций и расчета нужных величин).
 */

/* Размеры, виды начинок и добавок */
const SIZE_LARGE = {price: 100, calories: 40, description: "large"};
const SIZE_SMALL = {price: 50, calories: 20, description: "Small"};
const STUFFING_CHEESE = {price: 10, calories: 20, description: "Cheese"};
const STUFFING_SALAD = {price: 20, calories: 5, description: "Salas"};
const STUFFING_POTATO = {price: 15, calories: 10, description: "Potato"};
const TOPPING_MAYO = {price: 20, calories: 5, description: "Mayo"};
const TOPPING_SPICE = {price: 15, calories: 0, description: "Spice"};

/**
 * Представляет информацию об ошибке в ходе работы с гамбургером.
 * Подробности хранятся в свойстве message.
 * @constructor
 */
function HamburgerException(message){
    this.name = 'HamburgerException';
    this.message = message;
}

/**
 * Класс, объекты которого описывают параметры гамбургера.
 *
 * @constructor
 * @param size        Размер
 * @param stuffing    Начинка
 */
class Hamburger {
    constructor(size, stuffing) {
        this.size = size;
        this.stuffing = stuffing;
        this.toppings = [];
    }

    /**
     * Добавить добавку к гамбургеру. Можно добавить несколько
     *– при условии, что они разные.
     *
     * @param topping     Тип добавки
     * @throws {HamburgerException}  При неправильном использовании
     */
    addTopping(topping) {
        if (this.toppings.indexOf(topping) === -1) {
            this.toppings.push(topping)
        } else {
            throw new HamburgerException('Добавка существует');
        }
    }

    /**
     * Убрать добавку – при условии, что она ранее была
     * добавлена.
     *
     * @param topping   Тип добавки
     * @throws {HamburgerException}  При неправильном использовании
     */
    removeTopping(topping) {
        const toppings = [];
        if (this.toppings.indexOf(topping) === -1) {
            throw new HamburgerException('Такой добавки нет!');
        } else {
            for (const toppingItem of this.toppings) {
                if (toppingItem !== topping) toppings.push(toppingItem);
            }
            this.toppings = toppings;
        }
    }

    /**
     * Получить список добавок.
     *
     * @return {Array} Массив добавленных добавок, содержит константы
     *                 Hamburger.TOPPING_*
     */
    getToppings() {
        return this.toppings.map(function (topping) {
            return topping.description;
        });
    }

    /**
     * Узнать размер гамбургера
     */
    getSize() {
        return this.size.description;
    }

    /**
     * Узнать начинку гамбургера
     */
    getStuffing() {
        return this.stuffing.description;
    }

    /**
     * Узнать цену гамбургера
     * @return {Number} Цена в тугриках
     */
    calculatePrice() {

        const reducer = (accumulator, currentValue) => accumulator.price + currentValue.price;
        return this.toppings.length === 0 ? 0 + this.size.price + this.stuffing.price :
            this.toppings.reduce(reducer) + this.size.price + this.stuffing.price;
    }

    /**
     * Узнать калорийность
     * @return {Number} Калорийность в калориях
     */
    calculateCalories() {
        const reducer = (accumulator, currentValue) => accumulator.calories + currentValue.calories;
        return this.toppings.length === 0 ? 0 + this.size.calories + this.stuffing.calories :
            this.toppings.reduce(reducer) + this.size.calories + this.stuffing.calories;
    }
}

const burger = new Hamburger(SIZE_SMALL, STUFFING_CHEESE);

console.log(burger.getSize());
console.log(burger.getStuffing());
console.log(burger.removeTopping(TOPPING_MAYO));
burger.addTopping(TOPPING_SPICE);
burger.addTopping(TOPPING_MAYO);
burger.addTopping(TOPPING_MAYO);
console.log(burger.calculatePrice());
console.log(burger.getToppings());

burger.removeTopping(TOPPING_MAYO);
console.log(burger.removeTopping(TOPPING_MAYO));
console.log(burger.toppings);
console.log(burger.getToppings());
burger.removeTopping(TOPPING_SPICE);
console.log(burger.calculatePrice());

console.log(burger.calculateCalories());
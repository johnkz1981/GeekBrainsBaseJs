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

/**
* Класс, объекты которого описывают параметры гамбургера. 
* 
* @constructor
* @param size        Размер
* @param stuffing    Начинка
* @throws {HamburgerException}  При неправильном использовании
*/
/*function Hamburger(size, stuffing) {
  this.size = size;
  this.stuffing = stuffing;
 }*/
/* Размеры, виды начинок и добавок */
const SIZE_LARGE = { price: 100, calories: 40 }
const SIZE_SMALL = { price: 50, calories:20}
const STUFFING_CHEESE = { price: 10, calories: 20 }
const STUFFING_SALAD = { price: 20, calories: 5 }
const STUFFING_POTATO = { price: 15, calories: 10}
const TOPPING_MAYO = { price: 20, calories:5}
const TOPPING_SPICE = { price: 15, calories:0}

/**
 * Представляет информацию об ошибке в ходе работы с гамбургером. 
 * Подробности хранятся в свойстве message.
 * @constructor 
 */
function HamburgerException() { }

class Hamburger {
    constructor(size, stuffing) {
        this.size = size;
        this.stuffing = stuffing;
        this.topping = null;

    }



    /**
     * Добавить добавку к гамбургеру. Можно добавить несколько
     *– при условии, что они разные.
     *
     * @param topping     Тип добавки
     * @throws {HamburgerException}  При неправильном использовании
     */
    addTopping (topping) {
        this.topping = topping;
    }
    /**
     * Убрать добавку – при условии, что она ранее была
     * добавлена.
     *
     * @param topping   Тип добавки
     * @throws {HamburgerException}  При неправильном использовании
     */
    removeTopping  (topping) {}
    /**
     * Получить список добавок.
     *
     * @return {Array} Массив добавленных добавок, содержит константы
     *                 Hamburger.TOPPING_*
     */
    getToppings  () {}
    /**
     * Узнать размер гамбургера
     */
    getSize  () {}
    /**
     * Узнать начинку гамбургера
     */
    getStuffing () {}
    /**
     * Узнать цену гамбургера
     * @return {Number} Цена в тугриках
     */
    calculatePrice   () {}
    /**
     * Узнать калорийность
     * @return {Number} Калорийность в калориях
     */
    calculateCalories  () {}


}

const burger = new Hamburger(SIZE_SMALL, STUFFING_CHEESE )
burger.addTopping(TOPPING_MAYO)


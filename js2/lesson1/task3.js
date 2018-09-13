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
function Hamburger(size, stuffing) { 
  this.size = size;
  this.stuffing = stuffing;
 }
/* Размеры, виды начинок и добавок */
Hamburger.SIZE_SMALL = { price: 50, calories:20}
Hamburger.SIZE_LARGE = { price: 100, calories: 40 }
Hamburger.STUFFING_CHEESE = { price: 10, calories: 20 }
Hamburger.STUFFING_SALAD = { price: 20, calories: 5 }
Hamburger.STUFFING_POTATO = { price: 15, calories: 10}
Hamburger.TOPPING_MAYO = { price: 20, calories:5}
Hamburger.TOPPING_SPICE = { price: 15, calories:0}
/**
* Добавить добавку к гамбургеру. Можно добавить несколько
*– при условии, что они разные.
* 
* @param topping     Тип добавки
* @throws {HamburgerException}  При неправильном использовании
*/
Hamburger.prototype.addTopping = function (topping) {
  console.log()
}
/**
 * Убрать добавку – при условии, что она ранее была 
 * добавлена.
 * 
 * @param topping   Тип добавки
 * @throws {HamburgerException}  При неправильном использовании
 */
Hamburger.prototype.removeTopping = function (topping) ...
/**
 * Получить список добавок.
 *
 * @return {Array} Массив добавленных добавок, содержит константы
 *                 Hamburger.TOPPING_*
 */
Hamburger.prototype.getToppings = function () ...
/**
 * Узнать размер гамбургера
 */
Hamburger.prototype.getSize = function () ...
/**
 * Узнать начинку гамбургера
 */
Hamburger.prototype.getStuffing = function () ...
/**
 * Узнать цену гамбургера
 * @return {Number} Цена в тугриках
 */
Hamburger.prototype.calculatePrice = function () ...
/**
 * Узнать калорийность
 * @return {Number} Калорийность в калориях
 */
Hamburger.prototype.calculateCalories = function () ...
/**
 * Представляет информацию об ошибке в ходе работы с гамбургером. 
 * Подробности хранятся в свойстве message.
 * @constructor 
 */
function HamburgerException(...) { ... }
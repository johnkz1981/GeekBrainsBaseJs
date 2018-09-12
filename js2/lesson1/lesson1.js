
// Primitives vs Objects

// let a = 23;
// let b = a;
// a = 46;
// console.log(a);
// console.log(b);
//
// let obj = {
//     age: 23
// };
// let obj2 = obj;
// obj2.age = 24;
// console.log(obj.age);
// console.log(obj2.age);
//
// console.log([1,2,3]);

//ES5

//hoisting
// let john = new Person('John', 1980);
// let ann = new Teacher('Ann', 1999, 'math');
//
// function Person(name, yearOfBirth){
//     this.name = name;
//     this.yearOfBirth = yearOfBirth;
// }
//
// Person.prototype.calcAge = function(){
//     console.log(new Date().getFullYear() - this.yearOfBirth);
// };
// Person.prototype.lastName = 'Smith';
//
// function Teacher(name, yearOfBirth, subject){
//     Person.call(this, name, yearOfBirth);
//     this.subject = subject;
// }
//
// Teacher.prototype = Object.create(Person.prototype);
// Teacher.prototype.constructor = Teacher;

//ES6

class Person {
    constructor(name, yearOfBirth){
        this.name = name;
        this.yearOfBirth = yearOfBirth;
    }
    calcAge(){
        console.log(new Date().getFullYear() - this.yearOfBirth);
    }
    sayHi(){
        return `${this.name} says hi`;
    }
    static triple(x){
        if (x === undefined){
            x = 2;
        }
        return x * 3;
    }
}

class Teacher extends Person {
    constructor(name, yearOfBirth, subject){
        super(name, yearOfBirth); // Вызов конструктора родителя
        this.subject = subject;
    }
    sayHi(){
        console.log(`${super.sayHi()} as teacher`);
    }
}
let john = new Person('John', 1965);
john.calcAge();
let ann = new Teacher('Ann', 1965);
ann.sayHi();
console.log(Teacher.triple(4));


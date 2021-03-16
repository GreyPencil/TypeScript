"use strict";
class Person {
    constructor() {
        this.name = 'carrot';
        this.age = 18;
    }
    sayHello() {
        console.log("hello ladies and gentlemen");
    }
}
Person.gender = "male";
const person = new Person();
console.log(person);
person.sayHello();
console.log(Person.gender);

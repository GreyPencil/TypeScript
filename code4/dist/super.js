"use strict";
(function () {
    class Animal {
        constructor(name) {
            this.name = name;
        }
        bark() {
            console.log("animal is barking");
        }
    }
    class Dog extends Animal {
        constructor(age, name) {
            super(name);
            this.age = age;
        }
        bark() {
            // super.bark();
            console.log("woof!!!!!");
        }
    }
    const dog = new Dog(3, "meatball");
    dog.bark();
})();

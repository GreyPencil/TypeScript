"use strict";
(function () {
    class Animal {
        constructor(name) {
            this.name = name;
        }
    }
    class Dog extends Animal {
        bark() {
            // super.bark();
            console.log("woof!!!!!");
        }
    }
    const dog = new Dog("meatball");
    dog.bark();
})();

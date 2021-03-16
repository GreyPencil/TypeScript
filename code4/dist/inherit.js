"use strict";
(function () {
    class Animal {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        bark() {
            console.log("animal bark");
        }
    }
    class Dog extends Animal {
        run() {
            console.log(`${this.name} is running`);
        }
        bark() {
            console.log("woof~~~~~~");
        }
    }
    class Cat extends Animal {
        bark() {
            console.log("meow!!!!!!!!!!!!!!!");
        }
    }
    const dog = new Dog("meatball", 3);
    const cat = new Cat("mimi", 5);
    console.log(dog);
    dog.bark();
    dog.run();
    console.log(cat);
    cat.bark();
})();

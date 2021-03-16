(function () {
    abstract class Animal{
        name: string;
        constructor(name: string) {
            this.name = name;

        }
        abstract bark(): void;
            // console.log("animal is barking")

    }

    class Dog extends Animal{

        bark() {
            // super.bark();
            console.log("woof!!!!!")
        }
    }

    const dog = new Dog("meatball");
    dog.bark();


})();
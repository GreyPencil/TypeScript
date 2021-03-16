(function () {
    class Animal{
        name: string;
        constructor(name: string) {
            this.name = name;

        }
        bark(){
            console.log("animal is barking")
        }
    }

    class Dog extends Animal{

        age: number;

        constructor(age: number, name: string) {
            super(name);
            this.age = age;
        }

        bark() {
            // super.bark();
            console.log("woof!!!!!")
        }
    }

    const dog = new Dog(3, "meatball");
    

})();
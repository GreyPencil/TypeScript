class Dog{
    // name = "meatball";
    // age = 3;
    name: string;
    age: number;

    constructor(name: string, age: number) {
        // console.log("constructor is here");
        // console.log(this);
        this.name = name;
        this.age = age;
    }

    bark(){
        alert("woofwoof");
    }
}

const dog = new Dog("mike", 2);
const dog2 = new Dog("star", 3);
// const dog3 = new Dog();
// const dog4 = new Dog();

console.log(dog);
console.log(dog2);
// console.log(dog3);
// console.log(dog4);
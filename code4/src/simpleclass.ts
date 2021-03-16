class Person{
    readonly name: string = 'carrot';
    age: number = 18;
    static gender: string = "male";

    sayHello(){
        console.log("hello ladies and gentlemen")
    }
}

const person = new Person();

console.log(person);

person.sayHello();

console.log(Person.gender);
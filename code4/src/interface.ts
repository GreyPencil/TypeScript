(function () {

    interface myInterface{
        name: string;
        age: number;
    }
    interface myInterface{
        gender: string;
    }
    const obj: myInterface = {
        name: "meatball",
        age: 4,
        gender: "male"
    }

    interface myInter{
        name: string;

        sayHello():void;
    }

    class MyClass implements myInter{
        name: string;

        constructor(name: string) {
            this.name = name;
        }

        sayHello(): void {
            console.log("hello");
        }

    }


})();

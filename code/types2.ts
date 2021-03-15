// object
let a: object;
a = {};
a = function () {

}

// age?: age is opt
let b: { name: string, age?: number };

b = {name: "carrot"};

let c: { name: string, [propName: string]: any };

let d: (a: number, b: number) => number;
d = function (n1, n2) {
    return n1 + n2;
}

let e: string[];

let f: number[];

let g: Array<number>;

let x: Array<any>;

//tuple
let h: [string, string];

//enum
enum Gender{
    Female,
    Male
}
let i: { name: string, gender: Gender };
i = {
    name: 'carrot',
    gender: Gender.Female
}

console.log(i.gender === Gender.Male);
console.log(i.gender === Gender.Female);

let j: {name: string} & {age: 18};

type myType = 1|7|2|3|4|5;
let k: myType;
let l: myType;

k = 4;
l = 7;
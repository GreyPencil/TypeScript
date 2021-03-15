/*
let a;

a = 10;
a = 'hello';*/

//set a as number which won't be changed
let a : number;

a = 11;
a = 132;
// a = 'hello'; Type 'hello' is not assignable to type 'number'

let b: string;
b = 'hello';
// b=11;

// let c: boolean = true;
//or ts will judge c is boolean when assigned value to c
let c = true;

function sum (a: number, b: number): number{
    return a+b;
}

let result = sum(22, 33);
console.log(result);
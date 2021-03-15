/*
let a;

a = 10;
a = 'hello';*/
//set a as number which won't be changed
var a;
a = 11;
a = 132;
// a = 'hello'; Type 'hello' is not assignable to type 'number'
var b;
b = 'hello';
// b=11;
// let c: boolean = true;
//or ts will judge c is boolean when assigned value to c
var c = true;
function sum(a, b) {
    return a + b;
}
var result = sum(22, 33);
console.log(result);

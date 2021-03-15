//use literal to declare
let a: 10;
a = 10;
// a =11; error

let b: 'male' | 'female';

b = 'male';
b = 'female';
// b = 'hello' error

let c: boolean | string;

// close the type detection
let d: any;

d = 10;
d = '11';
d = true;

//prefer: unknown, because unknown is a safety type of any
let e: unknown;
// c = e;

if (typeof e ==="string"){
    c = e;
}

//type assertion
c = e as string;
//or
c = <string> e

function fn(): void{

}

//use never throw Error
function fn2(): never{
    throw new Error("Error!")
}
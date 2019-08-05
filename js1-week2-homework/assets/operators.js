// 1:
0 == '0'; // true
0 == []; // true
'0' == []; // false
/*-- 
Line 1: 0 is falsy value, '0' is not. 
        JS will coerce the types when using double equals method. 
        That means it will coerce both value to 0 = 0 wich is true.
Line 2: The empty array is truthy, 0 is falsy. 
        JS will coerce both to numbers. The empty array lenght is 0 
        so the result will be ture as 0 == 0
line 3: Both valus are truthy. JS can't coerce them to become the same type
        therfor the resul is false */

//2:================================================================
const x = [1, 2, 3];
const y = [1, 2, 3];
const z = y;
/* Array are treated as objects in JS. Objects are never equal 
    for either == or === Comparison operators.
    An expression comparing Objects is only true if the operands reference 
    the same Object.
    Therefor: x == y and x === y and z == x wil log fals while z === y wil log 
    true becouse y has the same referance of z object */

console.log(x == y); // false
console.log(x === y); // false
console.log(z === y); // true
console.log(z == x); // false

//3:================================================================

const o1 = { foo: 'bar' };
const o2 = { foo: 'bar' };
const o3 = o2;

/* - Cahnging o2 will change o3 becouse the value of o3 is referanced 
     to the value of o2. 
     For example: */

o2.foo = 'bar100';
console.log(o3); // Will log {foo: "bar100"}

/* changing o1 will not effect the value of o3 becouse objects are never equal 
    for Comparison operators: */
o1.foo = 'bar200';
console.log(o3); // will log {foo: "bar100"}

/*  - Does the order matter? 
    Yes. Cannot access the variable before initialization.
    you will get SyntaxError */

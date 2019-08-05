//If x equals 7, and the only other statement is x = x % 3, what would be the new value of x?
/* the new value of x will be the remainder after division of 7 / 3 which is 1 */
let e = 7;
e = e % 3;
console.log(e); // used new name coz x is already declared in another js file.

let g = 11;
g = g % 4; // the value of g will log 3
console.log(g);

g = g % 2; // the value of g will log 1
console.log(g);

let itemOne = 8;
let itemTwo = 'Deh Haag';
let itemThree = [1, 2, 3];
let itemFour = { somthing: 1 };
console.log('The value of my variable foo is: ' + itemOne);
console.log('The value of my variable foo is: ' + itemTwo);
console.log('The value of my variable foo is: ' + itemThree);
console.log(itemFour); // ('The value of my variable foo is: ' + itemfour) will log [object Object]

console.log(
  ' The type of my variables is: itemOne: number, itemTwo: string, itemThree: object, itemFour: object',
);
console.log(typeof itemOne);
console.log(typeof itemTwo);
console.log(typeof itemThree);
console.log(typeof itemFour);

// Comparing the type of the variables with if else:
if (typeof itemOne == typeof itemTwo) {
  console.log('SAME TYPE');
} else {
  console.log('NOT SAME TYPE'); // Will log: NOT SAME TYPE
}

if (typeof itemThree == typeof itemFour) {
  console.log('SAME TYPE'); // Will log: SAME TYPE
} else {
  console.log('NOT SAME TYPE');
}

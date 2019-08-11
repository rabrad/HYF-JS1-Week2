// Yes I can store multible types in an array.
const hArr = [1, 2, 'string', [1, 2, 3]];
console.log(hArr);

/* -Infinities.. But frist, Who is Iyad? :) 
Yes, you can compare Infinities. */
console.log(Infinity == Infinity); // will log true
console.log(Infinity === Infinity); // will log true
// Therefore:
console.log(6 / 0 === 10 / 0); // will log true

/* According to MDN: 
  The initial value of Infinity is Number.POSITIVE_INFINITY. 
  The value Infinity (positive infinity) is greater than any 
  other number. Mathematically, this value behaves the same as 
  infinity; for example, any positive number multiplied by 
  Infinity equals Infinity, and any number divided by Infinity 
  equals 0.
*/

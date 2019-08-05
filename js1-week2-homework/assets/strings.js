//01 - Find a way to remove the commas and replace them with spaces.
const myString = 'hello,this,is,a,difficult,to,read,sentence';
console.log(myString);

// const replaceExample = myString.replace(/item/g, 'replacement'); (g: stands for Global)
newString = myString.replace(/,/g, ' ');

console.log(newString); // hello this is a difficult to read sentence

// 02 - Find a way to reverse this string so that it becomes readable.
const str = 'dlroW olleH';
console.log(str);

// We need to create a function to reverce the charectors of the string.
function strTwo(str) {
  return str // set return value of the function.
    .split('') // Convert the string to an array.
    .reverse() // Reverce the arrays itmens.
    .join(''); // Join the itmes of thearray.
}

console.log(strTwo(str)); // Hello World

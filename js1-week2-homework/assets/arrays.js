const favoriteAnimals = ['blowfish', 'capricorn', 'giraffe'];
/* Adding new item to the array by using push method 
will add the new item to the end of the array */
favoriteAnimals.push('turtle');
// the array will log: ['blowfish', 'capricorn', 'giraffe', 'turtle']
console.log(favoriteAnimals);

// Remove or replace elements from an array using splice() :
favoriteAnimals.splice(1, 0, 'falcon'); // (1 = item index, 0 = delet nothing, Add new string item: 'falcon')
// the array will log: ['blowfish', 'falcon', 'capricorn', 'giraffe', 'turtle']
console.log(favoriteAnimals);

// Delete item for an array using splice():
favoriteAnimals.splice(3, 1); // (item index, 1 = delete 1 item)
// the array will log: ['blowfish', 'falcon', 'capricorn', 'turtle']
console.log(favoriteAnimals);

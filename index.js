//Number 1
/**Mutating array methods
 * Mutating array methods are methods that modify the contents of the array, without creating a new array.
 * Examples are push, pop, shift, unshift, splice.
 */


/**Mutating array methods
 * Non-mutating methods are methods that do not modify the original array, rather they return a new array.
 * Examples are concat, map, reduce, slice, filter .
 */

//Number 2
let languages = ['C#', 'JavaScript', 'Ruby', 'PHP', 'Python']
//1
languages.push('Kotlin')
//2
languages.splice(3, 0, 'Java')
//3
languages.shift()
//4
languages.unshift('Scala', 'Swift')
//5
languages.splice(5, 1, 'Go', 'Rust')
console.log(languages)

//Number 3
let fruit = ['apple', 'mango', 'banana'];
function changeFruit( fruit ) {
	fruit[2] = "orange";
	return fruit;
}
console.log(changeFruit(fruit));
//answer: [ 'apple', 'mango', 'orange' ]

//Number 4
let array1 = [0, -20, 320, 6]
function max(array1){
array1.sort(function(a, b){return a - b});
let lastNum = array1[array1.length - 1]
return lastNum
}
console.log(max(array1))

//Number 5
let array2 = [2,4,6,8];
function valTimesIndex(array2) {
    return array2.map((value, index) => value * index);
  }
console.log(valTimesIndex(array2))

// Array methods with examples and return values

// 1. push(): Adds one or more elements to the end of an array and returns the new length of the array.
const array1 = [1, 2, 3];
const newLength = array1.push(4, 5);
console.log(newLength); // Output: 5

// 2. pop(): Removes the last element from an array and returns that element.
const array2 = [1, 2, 3];
const lastElement = array2.pop();
console.log(lastElement); // Output: 3

// 3. forEach(): Executes a provided function once for each array element.
const array3 = ['a', 'b', 'c'];
array3.forEach(element => console.log(element));
// Output:
// a
// b
// c

// 4. map(): Creates a new array with the results of calling a provided function on every element in the calling array.
const array4 = [1, 2, 3];
const doubledArray = array4.map(num => num * 2);
console.log(doubledArray); // Output: [2, 4, 6]

// 5. filter(): Creates a new array with all elements that pass the test implemented by the provided function.
const array5 = [1, 2, 3, 4, 5];
const filteredArray = array5.filter(num => num % 2 === 0);
console.log(filteredArray); // Output: [2, 4]

// 6. find(): Returns the value of the first element in the array that satisfies the provided testing function.
const array6 = [5, 12, 8, 130, 44];
const found = array6.find(num => num > 10);
console.log(found); // Output: 12

// 7. indexOf(): Returns the first index at which a given element can be found in the array, or -1 if it is not present.
const array7 = [2, 5, 9];
console.log(array7.indexOf(5)); // Output: 1

// 8. slice(): Returns a shallow copy of a portion of an array into a new array object.
const array8 = [1, 2, 3, 4, 5];
const slicedArray = array8.slice(2, 4);
console.log(slicedArray); // Output: [3, 4]

// 9. splice(): Changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
const array9 = [1, 2, 3, 4, 5];
array9.splice(2, 0, 6);
console.log(array9); // Output: [1, 2, 6, 3, 4, 5]

// 10. reduce(): Executes a reducer function on each element of the array, resulting in a single output value.
const array10 = [1, 2, 3, 4];
const sum = array10.reduce((acc, curr) => acc + curr, 0);
console.log(sum); // Output: 10

// 11. join(): Joins all elements of an array into a string.
const array11 = ['Wind', 'Rain', 'Fire'];
console.log(array11.join()); // Output: Wind,Rain,Fire

// 12. reverse(): Reverses the elements of an array in place.
const array12 = [1, 2, 3];
array12.reverse();
console.log(array12); // Output: [3, 2, 1]

// 13. every(): Checks if all elements in an array pass a test.
const array13 = [1, 30, 39, 29, 10, 13];
const allBelow40 = array13.every(num => num < 40);
console.log(allBelow40); // Output: true

// 14. includes(): Determines whether an array includes a certain element, returning true or false.
const array14 = [1, 2, 3];
console.log(array14.includes(2)); // Output: true

// 15. lastIndexOf(): Returns the last index at which a given element can be found in the array, or -1 if it is not present.
const array15 = [2, 5, 9, 2];
console.log(array15.lastIndexOf(2)); // Output: 3

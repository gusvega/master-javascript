// Object methods with examples and return values

// 3. entries(): Returns an array containing all of the [key, value] pairs of a given object's own enumerable string properties.
const obj3 = { a: 1, b: 2, c: 3 };
const entries = Object.entries(obj3);
console.log(entries); // Output: [["a", 1], ["b", 2], ["c", 3]]

// 5. keys(): Returns an array containing the names of all of the given object's own enumerable string properties.
const obj5 = { a: 1, b: 2, c: 3 };
const keys = Object.keys(obj5);
console.log(keys); // Output: ["a", "b", "c"]

// 6. values(): Returns an array containing the values that correspond to all of a given object's own enumerable string properties.
const obj6 = { a: 1, b: 2, c: 3 };
const values = Object.values(obj6);
console.log(values); // Output: [1, 2, 3]

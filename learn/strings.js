// String methods with examples and return values

// 1. charAt(): Returns the character at a specified index (position) in a string.
const str1 = "Hello, world!";
console.log(str1.charAt(0)); // Output: H

// 2. charCodeAt(): Returns the Unicode of the character at a specified index in a string.
const str2 = "Hello";
console.log(str2.charCodeAt(0)); // Output: 72

// 3. concat(): Joins two or more strings and returns a new string.
const str3 = "Hello";
const str4 = "World";
console.log(str3.concat(", ", str4)); // Output: Hello, World

// 4. includes(): Checks if a string contains another string and returns true or false.
const str5 = "Hello, world!";
console.log(str5.includes("world")); // Output: true

// 5. indexOf(): Returns the index within the calling String object of the first occurrence of the specified value.
const str6 = "Hello, world!";
console.log(str6.indexOf("world")); // Output: 7

// 6. lastIndexOf(): Returns the index within the calling String object of the last occurrence of the specified value.
const str7 = "Hello, world!";
console.log(str7.lastIndexOf("o")); // Output: 8

// 7. length: Returns the length of a string.
const str8 = "Hello, world!";
console.log(str8.length); // Output: 13

// 8. slice(): Extracts a section of a string and returns it as a new string.
const str9 = "Hello, world!";
console.log(str9.slice(7)); // Output: world!

// 9. split(): Splits a string into an array of substrings based on a specified separator.
const str10 = "Hello, world!";
console.log(str10.split(", ")); // Output: ["Hello", "world!"]

// 10. substring(): Extracts the characters from a string, between two specified indices, and returns the new sub-string.
const str11 = "Hello, world!";
console.log(str11.substring(7)); // Output: world!

// 11. toLowerCase(): Converts a string to lowercase letters.
const str12 = "Hello, World!";
console.log(str12.toLowerCase()); // Output: hello, world!

// 12. toUpperCase(): Converts a string to uppercase letters.
const str13 = "Hello, World!";
console.log(str13.toUpperCase()); // Output: HELLO, WORLD!

// 13. trim(): Removes whitespace from both ends of a string.
const str14 = "   Hello, World!   ";
console.log(str14.trim()); // Output: Hello, World!

// 14. repeat(): Returns a new string with a specified number of copies of the string it was called on.
const str15 = "Hello";
console.log(str15.repeat(3)); // Output: HelloHelloHello

// 15. replace(): Searches a string for a specified value or regular expression and returns a new string where the specified values are replaced.
const str16 = "Hello, world!";
console.log(str16.replace("world", "universe")); // Output: Hello, universe!

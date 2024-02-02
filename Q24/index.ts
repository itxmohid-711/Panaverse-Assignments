/* More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
(i) Tests for equality and inequality with strings
(ii) Tests using the lower case function
(iii) Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
(iv) Tests using "and" and "or" operator
(v) Test whether an item is in a array
(vi) Test whether an item is not in a array */

// (i)
let str1 = "22";
let str2 = "23";
console.log(str1 === str2); // false
console.log(str1 !== str2); // true

// (ii)
let str3 = "MOHID";
let str4 = "2";
console.log(str3.toLowerCase === str4.toLowerCase); // true
console.log(str3.toLowerCase !== str4.toLowerCase); // false
 
// (iii)
let no1 = 4;
let no2 = 8;
console.log(no1 == no2); // false
console.log(no1 !== no2); // true
console.log(no1 > no2); // false
console.log(no1 < no2); // true
console.log(no1 >= no2); // false
console.log(no1 <= no2); // true

// (iv)
no1 = 4;
no2 = 8;
console.log(no1 || no2); // 4
console.log(no1 && no2); // 8

// (v)
let arr:number[] =[
    11,22,33,44,55]
console.log(arr.includes(44)); // true

// (vi)
let arr2:number[] =[
    11,22,33,44,55]
console.log(arr.includes(99)); // false





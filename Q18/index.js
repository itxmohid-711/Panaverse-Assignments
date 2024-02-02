"use strict";
// cls && tsc && node index.js
/*Seeing the World: Think of at least five places in the world you’d like to visit.
• Store the locations in a array. Make sure the array is not in alphabetical order.
• Print your array in its original order.
• Print your array in alphabetical order without modifying the actual list.
• Show that your array is still in its original order by printing it.
• Print your array in reverse alphabetical order without changing the order of the original list.
• Show that your array is still in its original order by printing it again.
• Reverse the order of your list. Print the array to show that its order has changed.
• Reverse the order of your list again. Print the list to show it’s back to its original order.
• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.*/
let locations = [
    "Burjkhalifa",
    "Makkah",
    "Madina",
    "Turkey",
    "London"
];
// original array
console.log("Original array : ", locations); // ok
// array in alphabet order
console.log("Alphabetic order array : ", [...locations].sort()); // ok
// original arr
console.log("Original array not changed : ", locations); // ok
// reverse order
console.log("Reverse alphabetic order : ", [...locations].sort().reverse());
// original arr
console.log("Original array does'nt changed : ", locations);
// array changed in alphabetic order
console.log("Array changed in alphabetic order : ", locations.sort());
// original array has been changed
console.log("Array is changed : ", locations);
// arrray changed in reverse alphabetic order
console.log("Array changed in reverse alphabetic order : ", locations.sort().reverse());
// order has been changed
console.log("Array is still changed : ", locations);

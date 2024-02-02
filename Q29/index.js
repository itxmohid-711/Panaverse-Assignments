"use strict";
// cls && tsc && node index.js
/* Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
• Make a array of your three favorite fruits and call it favorite_fruits.
• Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas! */
// array of fvrt fruits
let favorite_fruits = [
    "Apple",
    "Mango",
    "Banana",
    "Grapes"
];
// if else statements
if (favorite_fruits.includes("Apple")) {
    console.log("You like apples");
}
else if (favorite_fruits.includes('Mango')) {
    console.log("You like Mango");
}
else if (favorite_fruits.includes('Banana')) {
    console.log("You like Banana");
}
else if (favorite_fruits.includes('Grapes')) {
    console.log("You like Grapes");
}
else if (favorite_fruits.includes("Pineapple")) {
    console.log("You like pineapple");
}
else {
    console.log("This fruit is not your favourite one");
}

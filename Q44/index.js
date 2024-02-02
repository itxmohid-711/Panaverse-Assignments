"use strict";
/* Sandwiches: Write a function that accepts a array of items a person wants on a sandwich.
The function should have one parameter that collects as many items as the function call provides,
and it should print a summary of the sandwich that is being ordered.
Call the function three times, using a different number of arguments each time.*/
// function make_sandwich 
const make_sandwich = (...ingredients) => {
    console.log(`make sandwich with these ingredients = ${ingredients} `);
};
// calling function 3 times
// 1st time
console.log("First Order\n");
make_sandwich("egg", "mayo", "ketchup", "cabbage", "mustard sauce\n");
// 2nd time
console.log("Second Order\n");
make_sandwich("egg", "mayo", "ketchup\n");
// 3rd time
console.log("Third Order\n");
make_sandwich("mayo", "ketchup", "cabbage", "mustard sauce");

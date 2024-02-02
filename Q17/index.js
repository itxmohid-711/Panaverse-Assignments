"use strict";
// cls && tsc && node index.js
/*Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
• Print a message to each of the two people still on your list, letting them know they’re still invited.
• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program. */
// recalling the result list from previous Q
let frnds = [
    "Azeem",
    "Umar",
    "Abdullah",
    "Haseeb",
    "Azhar",
    "Ali Ahmad"
];
// console.log(frnds);
// sending sorry msg to all 
console.log("Sorry to all of you, ", frnds, " but the plan is cancelled and I can only invite 2 persons now.");
// removig first frnd
let name1 = frnds.pop(); // removes last person 
console.log(`I am sorrry ${name1} but you can't come we will have fun next time inshallah`);
// console.log(frnds); // list of 5
// removing second frnd
let name2 = frnds.pop(); // removes last person 
console.log(`I am sorrry ${name2} but you can't come we will have fun next time inshallah`);
// console.log(frnds); // list of 4
// removing second frnd
let name3 = frnds.pop(); // removes last person 
console.log(`I am sorrry ${name3} but you can't come we will have fun next time inshallah`);
// console.log(frnds); // list of 3
// removing second frnd
let name4 = frnds.pop(); // removes last person 
console.log(`I am sorrry ${name4} but you can't come we will have fun next time inshallah`);
// console.log(frnds); // list of 2
//sending invite to remaining the two frnds
// 1st frnd
console.log(`Assalam-o-alaikum! ${frnds[0]} you are one of the two persons that are coming with me at saturday night`);
//2nd frnd
console.log(`Assalam-o-alaikum! ${frnds[1]} you are one of the two persons that are coming with me at saturday night`);
let last2frnds = frnds.pop();
last2frnds = frnds.pop();
console.log(frnds);
// DONE

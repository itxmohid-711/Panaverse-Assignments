"use strict";
/* T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.

*/
let make_shirts = (a, b) => {
    return console.log(`Your entered size is ${a} and you want to print "${b}" on it. \n Would you want to confirm this.`);
};
make_shirts(12, "It's not error it's a feature");

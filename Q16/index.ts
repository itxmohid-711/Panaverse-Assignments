// cls && tsc && node index.js
/* More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
• Add one new guest to the beginning of your array.
• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. 
• Print a new set of invitation messages, one for each person in your list.*/

// Using old question data ( writing in easy way )
let frnds:string[]=[
    "Umar",
    "Haseeb",
    "Azhar"
];

// notify old frnds about bigger table
console.log(`Assalam-o-alaikum ${frnds} got a good news guys! I just got a bigger table for the dnner lets make the party bigger.`);

// adding at the start
frnds.unshift("Azeem");
// console.log(frnds);

// adding at the End
frnds.push("Ali Ahmad");
// console.log(frnds);

// adding at the Middle / at position 2(3)
frnds.splice(2,0,"Abdullah");
// console.log(frnds);

// Sending invite to all my 6 frnds

// Frnd at 0
console.log(`Assalam-o-alaikum ${frnds[0]}! I would like you to join me at dinner this saturday night`);

// Frnd at 1
console.log(`Assalam-o-alaikum ${frnds[1]}! I would like you to join me at dinner this saturday night`);

// Frnd at 2
console.log(`Assalam-o-alaikum ${frnds[2]}! I would like you to join me at dinner this saturday night`);

// Frnd at 3
console.log(`Assalam-o-alaikum ${frnds[3]}! I would like you to join me at dinner this saturday night`);

// Frnd at 4
console.log(`Assalam-o-alaikum ${frnds[4]}! I would like you to join me at dinner this saturday night`);

// Frnd at 5
console.log(`Assalam-o-alaikum ${frnds[5]}! I would like you to join me at dinner this saturday night`);


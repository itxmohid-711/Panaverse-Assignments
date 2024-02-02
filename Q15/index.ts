// cls && tsc && node index.js
//Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
//• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting. 
//• Print a second set of invitation messages, one for each person who is still in your list.

// My previous array of frnds

let frnds:string[]=[
    "Umar",
    "Haseeb",
    "Ahmad Bilal"
];
console.log(frnds);

// the frnd who is not coming to see me at the dinner

console.log(frnds[2]);
// removig the person who is not coming 

frnds.splice(2)
console.log(frnds);

// adding new frnd

frnds.push("Azhar") // add the person at the end
console.log(frnds);

// sending invite to the persons that are still present
//To Umar
console.log(`Assalam-o-alaikum ${frnds[0]}! I would like you to join me at dinner this saturday night`);
//To Haseeb
console.log(`Assalam-o-alaikum ${frnds[1]}! I would like you to join me at dinner this saturday night`);
// To Azhar
console.log(`Assalam-o-alaikum ${frnds[2]}! I would like you to join me at dinner this saturday night`);



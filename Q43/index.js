"use strict";
/*Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names.
Because the original array will be unchanged, return the new array and store it in a separate array.
Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name. */
// Q41 data 
let magician_names = [
    "Umar jadugar",
    "Haseeb jadugar",
    "Ali jadugar",
    "Bilal jadugar"
];
const show_magicians = (magician_names) => {
    for (let magician of magician_names) {
        console.log(magician);
    }
};
// show_magicians(magician_names)
// Q42 data 
const make_great = (magician_names) => {
    let greatMagicians = [];
    for (let magician of magician_names) {
        greatMagicians.push(magician + " The great.");
    }
    return greatMagicians;
};
// make_great(magician_names);
// Q43 making the data for myself data 
show_magicians(magician_names); // called make great function wuth magicians name
let greatMagicians = make_great(magician_names); // return and save in new array
console.log(greatMagicians);
show_magicians(magician_names); // call show_magicians() which show original names
show_magicians([...greatMagicians]);

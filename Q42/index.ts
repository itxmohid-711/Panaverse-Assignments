/*Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified. */

// previous Q41 data
let magicians:string[]=[
    "Umar jadugar",
    "Haseeb jadugar",
    "Ali jadugar",
    "Bilal jadugar"
];
const show_magicians=(Magicians:string[])=>{
    for(let magician of magicians){
        console.log(magician);
        
    }

}
show_magicians(magicians)

// modifying according to recquirement

const make_great=(magicians:string[])=>{
    for(let magician of magicians)
    console.log("The Great "+magician);
};
make_great(magicians);



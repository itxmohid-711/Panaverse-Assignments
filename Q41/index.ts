/*Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array. */

// array of magicians
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










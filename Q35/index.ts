/*Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal. 
• Modify your program to print a statement about each animal, such as A dog would make a great pet. 
• Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!*/
// array of pet animals
let pets:string[]=[
    "Cat",
    'Dog',
    "Rabbit"
];
// loop to print pet names
for(let i=0;i<pets.length;i++){
    console.log(`\nA ${pets[i]} would make a great pet.`); // print every single pet's name in given line
    
}
console.log("\nAny of these animals would make a great pet!");// common characteristics in all pets







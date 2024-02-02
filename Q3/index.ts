// cls && tsc && node index.js
// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
function toTitleCase(str:string) {
    return str.toLowerCase().split(' ').map(function (word) {
      return (word.charAt(0).toUpperCase() + word.slice(1));
    }).join(' ');
  }
let name = "Umar Afzal";
console.log(name.toUpperCase());
console.log(name.toLowerCase());
console.log(toTitleCase("I am eighteen years old "));


 
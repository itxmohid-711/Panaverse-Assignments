/*Cities: Write a function called describe_city() that accepts the name of a city and its country. The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value. Call your function for three different cities, at least one of which is not in the default country. */

// describe_city function
const describe_city=(city:string,country:string="Pakistan")=>{
    console.log(`The city "${city}" is in "${country}".`);
    
};
// for lahore in pakistan 
describe_city("Lahore");

// for karachi in pakistan
describe_city("Karachi");

// for LA in USA
describe_city("LA","USA");



















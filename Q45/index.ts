/*Cars: Write a function that stores information about a car in a Object. 
The function should always receive a manufacturer and a model name. 
It should then accept an arbitrary number of keyword arguments. 
Call the function with the required information and two other name-value pairs, such as a color or an optional feature. 
Print the Object that’s returned to make sure all the information was stored correctly. */

const cars_data = (manufacturer:string, model_name:string, ...restOfData:string[])=> {
     restOfData = restOfData || [];
   console.log(`The manufacturer of this car is:${manufacturer}`);
   console.log(`The model of car is:${model_name}`);
   if (restOfData.length > 0) {console.log( `The other data that you provided us is : ${restOfData.join(", ")}`); 
} 
};
// using the function without any additional data
cars_data( 
    "suziuki", 
    "WagonR"
);  

// Using the function with some additional data
cars_data(
    "Honda",
    "Civic",
    "Color = Red",
    "Model = 2020"
);




"use strict";
/*City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:
"Lahore, Pakistan"
Call your function with at least three city-country pairs, and print the value that’s returned.*/
// function
const city_country = (city, country) => {
    return console.log(`${city}, ${country} `);
};
// 1st country
city_country("Lahore", "Pakistan");
// 2nd country
city_country("Delhi", "India");
//3rd country
city_country("Los Angles", "United States");

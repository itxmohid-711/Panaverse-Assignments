// cls && tsc && node index.js
/*No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
• If the list is empty, print the message We need to find some users!
• Remove all of the usernames from your array, and make sure the correct message is printed. */
// array of user names from previous Q30
let Username_arr:string[]=[
    "admin",
    "ali",
    "umar",
    "haseeb"
];
// Adding if test to the arrray
if(Username_arr.length===0){
    console.log("Opps! We need to find some new users");
 
} else{
    console.log("Users are present in array");
    
}
// removing all the users from the array
Username_arr=[]; // declared Username_arr as an empty array
if(Username_arr.length===0){
    console.log("Opps! We need to find some new users");
 
} else{
    console.log("Users are present in array");
    
}























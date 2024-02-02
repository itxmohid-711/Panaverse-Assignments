// cls && tsc && node index.js
/* Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
• If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?
• Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.*/

// array of Usernames
let Username_arr:string[]=[
    "admin",
    "ali",
    "umar",
    "haseeb"
];
for(let i=0;i<Username_arr.length;i++){
    if(Username_arr[i]==="admin"){
        console.log("Hello admin, would you like to see a status report");
        
    }else{
        console.log(`Welcome back ${Username_arr[i]} how was your day?`);
        
    }
}









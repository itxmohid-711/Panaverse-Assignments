/*Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message. */
// make_shirt Function
let  make_shirts=(a:number | string ,b:string)=>{
    // defualt large size
    console.log(`1st defualt size is "Large" and it will print "I love TypeScript" on it.\n`);
    // defualt medium size
    console.log(`2nd defualt size is "Medium" and it will print "I love TypeScript" on it.\n`);
    // custom size with custom text
     console.log(`Your entered size is "${a}" and you want to print "${b}" on it. \n Would you like to confirm this.`);
};
// custom shirt
make_shirts("small","I love Iron Man");







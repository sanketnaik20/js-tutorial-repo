// singleton

//object-literals

const mySym= Symbol("MyKey")


const jsUser={
    name:"Sanket",
    "fullName":"Sanket Naik",
    [mySym]:"MyKey1",
    age:19,
    location:"Goa",
    email:"sanket@gmail.com",
    isLoggedIn: false,
    lastLoginDays:["monday","saturday"]
}


// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["fullName"]);
// console.log(jsUser[mySym]);


jsUser.email= "sanket@microsfot.com"
// Object.freeze(jsUser);
jsUser.email="sanket@chatgpt.com"
// console.log(jsUser);




jsUser.greeting=function(){
    console.log("Hello Js User");
}
jsUser.greetingTwo=function(){
    console.log(`Hello Js User, ${this.name}`);
}

console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());
//# Primitive


// 7 types : String,Number,Boloean,null,undefined,Symbol,BigInt

// const score=100
// const anotherScore=100.3

// const isLoggedIn=true
// const outsideTemp=null

// let userEmailId

// const id=Symbol('190')
// const anotherId=Symbol('190')
// // console.log(id===anotherId);


// const bigNumber=82292984928248n

// //Non- Primitive ( Reference)
// //Arrays,Objects,functions

// const Heros=['shaktiman','ironman','golu'];

// let myObj={
//     name:"Sanket",
//     age:19,
// }


// const myFucntion = function(){
//     console.log("Hello world");
// }


//++++++++++++++++++++++++++++++++++//


//stack(primitive), heap(non primitive)


let myYoutubeName="sanket naik";

let YoutubeName=myYoutubeName;
console.log(YoutubeName);



let userOne={
    email:"sanket@rediff.com",

    upi: "sanket@upi"
}
let userTwo=userOne;

userTwo.email="naiksanket@mail";
console.log(userTwo.email);
console.log(userOne.email);




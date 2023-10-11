const user={
    username:"sanket",
    price:999,



    welcomeMessage: function()
    {
      console.log(`${this.username},Welcome to Our Website:`);
    }
}


// user.welcomeMessage();
// user.username="Sam"
// user.welcomeMessage();
// console.log(this);


// function chai()
// {
//     console.log(this);
// }
const chai= ()=>{
console.log(this);
}


// chai();

// const addtwo=(num1,num2)=>num1+num2
// const addtwo=(num1,num2)=>(num1+num2)
const addtwo=(num1,num2)=>({username:"sanket"})
console.log(addtwo(4,3));





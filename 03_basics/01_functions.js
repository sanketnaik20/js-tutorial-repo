

// function sayMyName(){
//     console.log("S");
//     console.log("a");
//     console.log("n");
//     console.log("k");
//     console.log("e");
//     console.log("t");
// }

// sayMyName();


// function addTwoNumber(number1,number2)
// {
//     console.log(number1+number2);
// }
function addTwoNumber(number1,number2)
{
    // let result= number1+number2;
    // return result;


    return (number1+number2);
}
const result= addTwoNumber(3,5);
// console.log("Result is: ",result);


function loginUserMessage(username)
{
    if(!username){
console.log("Please Enter a UserName");
return ;
    }
    return `${username} just logged in`

}

// console.log(loginUserMessage("Sanket"));
// console.log(loginUserMessage("sanket"));





function calculateCartPrice(...num1)
{
return num1;
}

// console.log(calculateCartPrice(2,4,5,6,6,7,8,20000));


const user={
    username: "Sanket Naik",
    id: "1234"
}

function handleobj(anyobject)
{
console.log(`Username is ${anyobject.username},and his id is ${anyobject.id}`);
}


// handleobj(user)
// handleobj({
//     username:"Sanket",
//     id:"3445"
// })



const myNewArr=[1,2,3,4,4];
function returnSecondValue(getArray) {
    return getArray[1];
}


console.log(returnSecondValue([200,3000,48882]));
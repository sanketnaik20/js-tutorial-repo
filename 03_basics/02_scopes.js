// let 
// var
// const


let a=10;
const b=20
var c=100




if(true)
{
    let a=100;
    const b=2000;
    // console.log(`Inner: a=${a},b=${b}`);
    // var c=300000;
}

// console.log(a);
// console.log(b);

// console.log(c);



//++++++++++++++++++ NESTED SCOPE+++++++++++++++++//


function One()
{
    const username="Sanket"

    function Two()
    {
        const website="youtube"
        // console.log(username);
    }
    // console.log(website);
    Two();
}

One();



// ++++++++++++++++interesting++++++++++++//


console.log(addone(5));
function addone(num)
{
    return num+1;
}

const result=function addtwo(num)
{
    return num+2;
}
// addTwo(5)
// console.log(result)
const myNums=[1,2,3,4,5];
// const myTotal=myNums.reduce(function(acc,curVal){

//     console.log(`acc:${acc},curVal: ${curVal}`);
//     return acc+curVal
 // },0)
// const myTotal=myNums.reduce((acc,val)=>(acc+val))



const myShoppingCart=[
    {
        itemname:"Js",
     price:2999
    },
    {
        itemname:"CPP",
        price:3000
    },
    {
        itemname:"Phyton",
        price:5000
    },
    {
        itemname:"RUby",
        price:10000
    }
]



const priceToPay=myShoppingCart.reduce((acc,item)=>item.price+acc,0);
console.log(priceToPay);
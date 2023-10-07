let myDate = new Date();

// console.log(myDate.toLocaleTimeString('en-IN'));
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleDateString(`en-IN`));


// let myCreatedDate = new Date(2023, 0, 23)
// let myCreatedDate = new Date(2023, 0, 23, 5, 3, 2)
let myCreatedDate = new Date("12-01-2023")
// console.log(myCreatedDate.toLocaleString());



let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now() / 1000));


let newDate = new Date()
// console.log(newDate.getFullYear());
// console.log(newDate.getMonth() + 1);
// console.log(newDate.getDate());
// console.log(newDate.getDay());



// console.log(`Year is '${newDate.getFullYear()}' and the month is '${newDate.getMonth()}' and the date is '${newDate.getDate()}'`);



console.log(newDate.toLocaleString('Default', {
    weekday: "long",
   
    


}))


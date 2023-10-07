// const tinderUser= new Object()
const tinderUser={};
tinderUser.id="1234abac"
tinderUser.name="Sanket";
tinderUser.age=18;

tinderUser.isLoggedIn=false;

const regularUser={
    email:"sanket@gmail.com",
    fullname:{
        userFullName:{
            firstname:"sanket",
            lastname:"naik"
        }
    }
}
// console.log(regularUser.fullname?.userFullName.firstname);

const obj1={1:"a",2:"b"}
const obj2={3:"c",3:"d"};

// const obj3= {obj1,obj2};

// const obj3=Object.assign({},obj1,obj2)


const obj3={...obj1,...obj2}
// console.log(obj3);


const users=[
    {
        id:1,
        email:"s@gmail"
    },
    {
        id:2,
        email:"s@gmail"
    },
    {
        id:3,
        email:"s@gmail"
    },
];


// console.log(users[1].email);

// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));


// console.log(tinderUser.hasOwnProperty('isLoggedIn'));
// console.log(tinderUser.hasOwnProperty('isLogged'));



const course={
    courseName:"JsInHindi",
    courseFee:999,
    courseTeacher:"sanket"

}



const {courseTeacher:teacher}=course;
console.log(teacher);



// {
//     "name":"sanket",
//     "age": 10,
//     "email": "s@gmail.com"
// }


[
    {},
    {

    },
    {}
]
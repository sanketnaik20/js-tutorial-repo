const myMARVELHeroes=["ironman","spiderman","thor"];

const myDcHeros=["flash","superman","batman"];


// myMARVELHeroes.push(myDcHeros);
// console.log(myMARVELHeroes);


// const myNew=myMARVELHeroes.concat(myDcHeros);
// console.log(myNew);


const my_new_heroes=[...myMARVELHeroes,...myDcHeros]
// console.log(my_new_heroes);


const my_other_arr=[1,2,3,[4,5,6],[7,[8,9]],12]


const my_extra_heroes=my_other_arr.flat(Infinity)
// console.log(my_extra_heroes);



// console.log(Array.isArray("Sanket"))
//  console.log(Array.from("Sanket"));
//  console.log(Array.from({name: "Sanket"}));



 let score1=100
 let score2=200
 let score3=300

 console.log(Array.of(score1,score2,score3));
// Immediately invovked function expression


(function chai()
{
    console.log("DB connected");
}());

(  ()=>{
console.log(`DB connected two`);
} ) ();
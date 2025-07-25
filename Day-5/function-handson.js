function greet(){
    console.log("hello");
}
//calling function
greet();

//function with parameter
function greetWithName(name){
    console.log("hye");
}
greetWithName("dheeraj");

//with 2 parameters
function greetWithName(fname,lname){
    console.log("helo");
    console.log("bye");
}
greetWithName("dheeraj","poonia");


//function to add numbers with return value
function addnum(a,b){
return a+b;
}
let result = addnum(12,7);
console.log(result);


//subtract function

function subnum(a,b){
return a-b;
}
let results = addnum(12,7);
console.log(results);
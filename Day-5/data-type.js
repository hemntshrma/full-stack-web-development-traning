// string
let name = "Hemant";
console.log(name);

//let is a keyword for variable declaration
//let variableName = value

// number
let age = 26;
console.log(age);
console.log("my age is " + age);
console.log("my age is ", age);

//float
let height = 5.9;
console.log(height);
// in c,printf("\f",height);
//javascript dynamic type launguage (we don't define type of vriable/data)
//c,c++,java static type launguage 
//int age = 36;string name ="dheeraj";float height = 5.9;
//in js, we just use let keyword to take any type of data value

let isMarried = false;
console.log(isMarried);

//is js case sensitive?
let a = 10; //a is smaller case variable
let A = 20;// A in capital case variable
console.log(a, A);//10 20
//js is case sensitive launguage

//undefined
let x;
console.log(x);

// null
let y = null;
console.log(y);

//object dat type 
//let objectName = (key: value,key2: value2)
//key is string,value can be any data type
// object is form of dictionary in js 
let person = {
    "name": "hemant",
    "age": "26",
    "height": " 2.4",
    "address": {
        "city": "Delhi",
        "pincode": 132145
    }
}
console.log(person);

let address ={
    "ke1": "string value",// value is string
    "ke2": 1234,//value is number
    "homeAddress":{"city": "delhi"},//value is object
"officeAddress":{"city": "noida"}//value is object
}
console.log(address);
console.log(address.homeAddress.city);
//print city of homeAddress
console.log("my office city is " + address.officeAddress.city);

//array data type 
let myFriends = ["Amit","Rahul","Anmol","amit"];
console.log(myFriends);
console.log(myFriends [2]);
// my friend is anmol
console.log("my best Friend is" + myFriends [2]);
console.log("my best friends are " + myFriends[1] + " and " + myFriends[3]);// stringnconcatenation
console.log(`my best friends are ${myFriends[1]} and ${myFriends[3]}`);//
//date data type 
let currentDate = new Date();
console.log(currentDate);
let myDOB = new Date("1999-6-2");
console.log(myDOB);
console.log("dob year " + myDOB.getFullYear());
console.log("dob month " + (myDOB.getMonth() +1));
console.log("dob day " + myDOB.getDay());
console.log("my expression " + 1 +5);//my expression 15
console.log("my expression " + (1 +5));//my expression 6
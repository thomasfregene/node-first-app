//primitive datatypes
const name = 'Max';
let age = 20;
const hasHobbies = true;
age = 30;
//console.log(age);

//arrow function
const summarizeUser = (userName, userAge, userHasHobby) => {
    return 'Name is ' + userName + ', age is ' + userAge + ' and the user has hobby: ' + userHasHobby;
}

//arrow function with one return
const add = (a,b)=>a+b;
const addOne = a=>a+1; 
const addRandom = ()=>1+2;

var result = summarizeUser(name, age, hasHobbies);

var sum = addOne(1);
var sum = addRandom();
console.log(sum);
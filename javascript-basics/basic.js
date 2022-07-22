//primitive datatypes
var name = 'Max';
var age = 20;
var hasHobbies = true;
//console.log(hasHobbies);

//function
function summarizeUser(userName, userAge, userHasHobby){
    return 'Name is ' + userName + ', age is ' + userAge + ' and the user has hobby: ' + userHasHobby;
}

var result = summarizeUser(name, age, hasHobbies);
console.log(result);
const person ={
    name: 'John',
    age: 29,
    greet(){
        console.log('Hi, I am ' + this.name);
    }
};

const hobbies = ['Sports', 'Cooking', 'Reading'];
// for(let hobby of hobbies){
//     console.log(hobby);
// }

console.log(hobbies.map(hobby=> 'Hobby: ' + hobby));
hobbies.pop('Baking');
console.log(hobbies);
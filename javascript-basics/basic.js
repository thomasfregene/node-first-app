const person ={
    name: 'John',
    age: 29,
    greet(){
        console.log('Hi, I am ' + this.name);
    }
};

const printName = ({name})=>{
    console.log(name)
}

printName(person);

const {name, age} = person;

const hobbies = ['Sports', 'Cooking', 'Reading'];
const [hobby1, hobby2, hobby3] = hobbies;
console.log(hobby1, hobby2, hobby3);
// for(let hobby of hobbies){
//     console.log(hobby);
// }

// console.log(hobbies.map(hobby=> 'Hobby: ' + hobby));
// hobbies.pop('Baking');
// console.log(hobbies);

// const copiedArray = hobbies.slice();
/*Spread Operator*/
// const copiedArray = [...hobbies];

// console.log(copiedArray);

// const copiedPerson = {...person};
// //console.log(copiedPerson.greet());

// /*Rest Operator*/
// // const toArray = (arg1, arg2, arg3)=>{
// //     return [arg1, arg2, arg3];
// // }

// // console.log(toArray(1,2,3,4))

// const toArray = (...args)=>{
//     return args;
// }

// console.log(toArray(1,2,3,4));
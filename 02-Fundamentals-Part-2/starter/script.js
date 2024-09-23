'use strict';



function printArray(temperature){

    for(let i = 0 ; i< temperature.length ; i++){

        console.log(`... ${temperature[i]}C in ${i+1} ...`);

    }


}

const array = [17,21,23];

printArray(array);


/*

const Jonas = {

    firstName: "Akashkumar",
    lastName: "Yadav",
    birthYear: 2002,
    // age: 2024 - 2002,
    job: "Engineer",
    friends: ['Pranav Yadav', 'Prachi Yadav', 'Harsh Yadav', 'Shubham Yadav'],
    hasDriverLiscence: false,
    calAge: function () {

        this.age = 2037 - this.birthYear;
        return this.age;
    },
    getSummary: function () {

        console.log(`${this.firstName} is a ${this.calAge()}-year old ${this.job} and he has ${this.hasDriverLiscence ? 'a' : 'no'} liscence`);


    }

}

console.log(Jonas);
Jonas.location = "Mumbai";
Jonas.college = "Indian Institute of Technology";

console.log(Jonas);

console.log(Jonas.firstName);
console.log(Jonas[`lastName`]);
console.log(Jonas[`age`]);
console.log(Jonas[`friends`]);
console.log(Jonas[`job`]);
console.log(Jonas.calAge(2002));
console.log(Jonas['calAge'](2003));
console.log(Jonas.getSummary());

*/


// greet1("Akashkumar");

/*
function pieces(fruit) {

    return 4 * fruit;

}
function greet1(name){

    console.log(`Hello how are you ${name} :) `);

}

const greet2 = function(name){

    console.log(`Hello how are you ${name} :) __ `);


}

const greet3=Name=>{
    console.log(`Hello how are you ${Name} :) __ `);
}

// greet2("Akashkumar Yadav");

greet3("Akashkumar Yadav");

function processFood(apples, oranges) {

    const applePieces = pieces(apples);
    const orangePieces = pieces(oranges);

    const wholeJuice = `The juice is made up with ${applePieces} of apples and ${orangePieces} of oranges`;

    return wholeJuice;

}

console.log(processFood(4, 5));
*/

/*
function logger() {
    console.log("My name is Akashkumar Yadav");
}

logger();
logger();
logger();

function foodProcessor(apples , oranges){

    console.log(apples,oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges. `;
    return juice;


}

console.log(foodProcessor(5,6));

*/

// function declaration

/*
function calculateYear1(currentAge) {

    return 2024 - currentAge;

}

console.log(calculateYear1(2002))

const age2 = function calculateYear2(currentAge) {

    return 2024 - currentAge;

}

console.log(age2(2000));
*/

// const calculateYear1 = birthYear => 2024-birthYear;

// console.log(calculateYear1(1919));

// const calculateYear1 =( birthYear,currentAge) => {2024-birthYear};

// console.log(calculateYear1(1919,20));

// fucntion declaration
/*
function greet1(firstName) {

    console.log(`how are you ${firstName} !`);


}

const greet2 = function (firstName) {

    console.log(`how are you ${firstName} !`);
}

const greet3 = firstName => console.log(`how are you ${firstName} !`);
greet1("Akashkumar Yadav");
greet2("Pranav Yadav");
greet3("Prachi Yadav");
*/

/*
const friends = ["Akashkumar Yadav", "Pratik Yadav", "Shubham Yadav", "Harsh Yadav"];
*/

// console.log(friends[0]);
// console.log(friends[1]);
// console.log(friends[2]);
// console.log(friends[3]);

// console.log(friends);

// const firstName = "Akashkumar";
// const lastName = "Yadav";
// const age = 22;
// const job = "FullStack Developer";
// const MyFriend = [firstName, lastName, age, job, friends];

// console.log(MyFriend);

// Operation on array Friends

/*

friends.push("Tejas Patel");
friends.push("Rohit Verma");

console.log(friends);

friends.pop();
friends.pop();
friends.pop();
console.log(friends);

friends.unshift("Heavy Driver");
console.log(friends);
*/
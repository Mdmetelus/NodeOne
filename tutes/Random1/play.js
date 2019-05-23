const myName = 'Max';
console.log ('Hello ' + myName +'!');
const age = 35;
const hasHobbies = true;

const summarizeUser = function summarizeUser(userName, userAge, userHasHobby) {
    return (
        'Name is ' + userName + ', age is ' + userAge + ' and the user has hobbies: ' + userHasHobby
    );
}
console.log(summarizeUser(myName, age, hasHobbies));

const add = (a,b) => a + b;
console.log(add(1,7));

const addOne = a => a + 1;
console.log(addOne(5));

const addRandom = () => 1 + 2;
console.log(addRandom());
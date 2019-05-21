const person = {
    name: 'Max',
    age: 35,
    greet() {
        console.log('Hi, I am ' + this.name);
    }
    // goodBye: function() {
        // console.log('Goodbye ' + this.name + '!');
    // }
};
// const printName = (personData) => {
//     console.log(personData.name);
// }

// printName(person);

// destructured version
const printName = ({name}) => {
    console.log(name);
}

printName(person);
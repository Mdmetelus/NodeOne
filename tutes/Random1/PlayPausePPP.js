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
console.log(person);
person.greet();
// person.goodBye();


// cant use the 2 different ways of making a function in the same object

const person1 = {
    name: 'Max',
    age: 35,
    // greet() {
        // console.log('Hi, I am ' + this.name);
    // }
    goodBye: function() {
        console.log('Goodbye ' + this.name + '!');
    }
};
// console.log(person);
// person.greet();
person1.goodBye();
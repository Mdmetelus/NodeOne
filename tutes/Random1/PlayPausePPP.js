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

const hobbies = ['Coding','Playing', 'Pausing', 'PPPPPPP','Sports','Cooking'];

for (let hobby of hobbies) {
    console.log(hobby);
}

for (let children of hobbies) {
    console.log(children.length + ' ' + children)
}

console.log(hobbies.map(hobby => {
    return 'Hobby: ' + hobby;
}));
console.log('original list: \n');
console.log( hobbies);
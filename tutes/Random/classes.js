class Lion {
    constructor(name, haircolor) {
        this.name = name;
        this.hairColor = haircolor;
    }
    logName() {
        console.log(`Roar!!! I am, ${this.name}!`);
    }
}

const goldenLion = new Lion('Mufasa', 'golden');
const darkLion = new Lion('Scar', 'darkBrown');

console.log(goldenLion);
console.log(darkLion);


// node output:
// └─ $ ▶
// Lion { name: 'mufasa', hairColor: 'golden' }
// Lion { name: 'Scar', hairColor: 'darkBrown' }

goldenLion.logName();
darkLion.logName();

// node output:
// └─ $ ▶ 
// Lion { name: 'Mufasa', hairColor: 'golden' }
// Lion { name: 'Scar', hairColor: 'darkBrown' }
// Roar!!! I am, Mufasa!
// Roar!!! I am, Scar!
// ['Coding','Playing', 'Pausing', 'PPPPPPP','Sports','Cooking'];
const hobbies = ['Coding','Playing', 'Pausing', 'PPPPPPP','Sports','Cooking'];

hobbies.push('Programming');
hobbies.push('Practice');
console.log(hobbies);

//  slice just coppies an array.
// you can also use slice to narow down what portion of the stuff in the array you want to copy.
const copiedArray = hobbies.slice();
console.log(copiedArray);

const copiedArray1 = [hobbies];
console.log(copiedArray1);

const copiedArray2 = [copiedArray1];

copiedArray1.push('More Programming');
copiedArray1.push('More Practice');

copiedArray2.push('Even more Programming');
copiedArray2.push('Even More Practice');
console.log(copiedArray2);

const ArrayNew = [...hobbies];
NextNewArray = [...copiedArray2]
console.log(NextNewArray);

// unnested Array manipulation.

UnNestedArray = [...hobbies];
UnNestedArray.push('More Programming');
UnNestedArray.push('More Practice');

NextUnNestedArray = [...UnNestedArray];
NextUnNestedArray.push('Even more Programming');
NextUnNestedArray.push('Even More Practice');
console.log(NextUnNestedArray);
const toArray = (arg1, arg2, arg3) => {
    return [arg1, arg2, arg3];
};

console.log(toArray(1,2,3));

const toArray1 = (...args) => {
    return args;
}
console.log(toArray1(5,4,3,2,1));
// Hello after 4 seconds

// Hello after 8 seconds

// you can define only one function

// const theOneFunc = () => {};


const theOneFunc = (delay) => {
    console.log(`Hello after ${delay} seconds(3)`);
};

setTimeout(theOneFunct, 4 * 1000);

setTimeout(theOneFunct, 8 * 1000);

// or

setInterval(() => console.log('Hello every 4 seconds'), 4000);


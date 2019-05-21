// import { callbackify } from "util";

const fetchData = callback => {
    setTimeout(() => {
        callback('Done! I\'m done this nested Callback');
    }, 1500);
}


setTimeout(() => {
    console.log('Timer is done! \n This is async code.\n');
    fetchData((text) => {
        console.log(text);
    });
}, 2001);

console.log('Hello');
console.log('H1!\n');
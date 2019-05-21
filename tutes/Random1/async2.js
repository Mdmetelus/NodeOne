// import { callbackify } from "util";

const fetchData = () => {
    const promise = new Promise((resolve, reject) => {
        setTiemout(() => {
            resolve('Done!');
        }, 1300);
    });
    return promise;
};


setTimeout(() => {
    console.log('Timer is done!');
    fetchData()
        .then(text => {
            console.log(text);
            return fetchData();
        })
        .then(text2 => {
            console.log(text2);
        });
}, 2000);

console.log('Hello');
console.log('H1!\n');
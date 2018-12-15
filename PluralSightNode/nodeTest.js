function today() {
    console.log('simple node test function in the cli');
    return new Date();
   
 }


 //set time out example printssthe greeting after 4 seconds.
 setTimeout(() => {
     console.log('Hello after 4 seconds (1)');
 }, 4*1000);

 setTimeout(() => {
    console.log('Hello after 4 seconds(2)');
}, 4000);


const func = () => {
    console.log('Hello after 4 seconds(3)');
};

setTimeout(func,4000);
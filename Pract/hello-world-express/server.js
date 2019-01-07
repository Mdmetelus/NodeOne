const express = require('express');
 
const port = 5000;
// const server = http.createServer((req, res) => {
//     res.statusCode = 200;
//     res.setHeader("Content-Type", 'text/plain');
//     res.end('Hello World From  NodeJS');
// });

const server = express();

// needed for the post of data
server.use(express.json());

server.get('/', (req, res) => {
    res.send('Hello world from express')
});
// the / is a rougt, location 
// req and res call back is middle wear and a request handler
// const serveer and the server.get are the express way of doing the const server  using node.js, it changes to an express server from an http server.
// server.get is the  READ DATA one
server.get('/hobbits', (req,res) => {
    console.log(req.query);
    //query string parameters get added to req.query
    const sortField = req.query.sortby || 'id';
    const hobbits = [{ id: 1, name:'Samwise Gamgee' },{ id: 3, name:'Bilbo Baggins' },{ id: 2, name: 'Frodo Baggins' }, ];

    //apply the sorting
    const response = hobbits.sort((a, b) => (a[sortField] < b[sortField] ? -1 : 1)
    );

    res.status(200).json(response);
    // res.status(200).send('Welcome to Hobbiton');
});


let nextId = 3;

let hobbits = [
    {
      id: 1,
      name: 'Bilbo Baggins',
      age: 111,
    },
    {
      id: 2,
      name: 'Frodo Baggins',
      age: 33,
    },
  ];

//status code 201 belongs to only  post, and creating new date successfully.
// server.post is the CREATE DATA one
server.post(`/hobbits`, (req, res) => {
    const hobbit = req.body;
    hobbit.id = nextId++;
  
    hobbits.push(hobbit);
    console.log(hobbit);
    console.log(req.body);
  
    res.status(201).json(hobbits);
    // res.status(201).json({ url: '/hobbits', operation: 'POST'});
});



//server.put is the UPDATE DATA option.
server.put('/hobbits', (req,res) => {

    res.status(200).json({ url: '/hobbits', operation: 'PUT'});
}); // Put refers to update, so any time we want to change the data we use it.

//204 status code lets us know something has been deleted. we don't need any
//you also need a terminating process. so instead of using res.status(204) we sould us res.sendStatus(204)
// server.delete is the DELETE/DESTROY DATA one.

// server.delete('/hobbits/:id', (req,res) => {
//     const id = req.params.id;
//     // or we could destructure it to look like: const { id } = req.params;
//     console.log(req.params.id);
//     console.log(req.params);
//     res.status(204).json({ 
//         url: `/hobbits/:${id}`, 
//         operation: `DELETE for hobbit with id ${id}`,
//     });

//     // res.sendStatus(204);
// }); // DELETE/DESTROY DATA 

server.put('/hobbits/:id', (req, res) => {
    const hobbits = hobbits.find(h => h.id == req.params.id);
    if(!hobbits){
        res.status(404).json({ message: 'Hobbit does not exist'});
    } else {
        //modify the existing hobbit;
        Object.assign(hobbit, req.body);

        res.status(200).json(hobbit);
        console.log(hobbit);
        console.log(req.body);
    }
});



server.listen(port,  () => {
    console.log(`server listening on ${port}`);
})
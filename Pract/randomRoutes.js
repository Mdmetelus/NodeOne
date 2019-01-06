import { Server } from "tls";

server.get('/about', (req,res) => {
    console.log(req);
    res.status(200).send(`<h1>About Us</h1>`);
});

server.get('/contact', ( req, res) => {
    res.status(200).send(`<h1>Contact Form</h1>`);
});

server.delete('/hobbits/:id', (req,res) => {
    //`:id` will represent whatever comes after hobbits/
});

server.delete(`hobbits/:id`, (req, res) => {
    const id = req.params.id;
    //or we could destructure it like this const { id } = req.params;
    res.status(200).json({
    url: `/hobbits/${id}`,
        operation: `DELETE for hobbits with id ${id}`,
    });
});

//example:
// locolhost:500/hobbits/12 will be represented by the following in postman:
//{
//     "url": "/hobbits/12",
//     "operation": "DELETE for hobbits with id 12"
// }


// ++++++++++++++++++++++++++++++++++++
//  really good Query string example!
// ++++++++++++++++++++++++++++++++++++++
server.get('hobbits', (req,res) => {
    // query string parameters get added to req.query
    const sortField = req.query.sortby 

    const hobbits = [{},{}];
    //sorting and display response logic can go here but before the res respose part.
    //apply the sort
    const response = hobbits.sort((a,b)=>{
        a[sortField] < b[sortField] ? -1 : 1
    });
    res.status(200).json(response);
})

// Request.BODY EXAMPLE:

let nextId = 3;
//  Modify the post endpoint like so:
server.post('hobbits', (req, res)=> {
    const hobbits = req.body;
    hobbits.id = nextId++;
    hobbits.push(hobbits); 
});

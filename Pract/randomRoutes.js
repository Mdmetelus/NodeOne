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


import { Server } from "tls";

server.get('/about', (req,res) => {
    console.log(req);
    res.status(200).send(`<h1>About Us</h1>`);
});

server.get('/contact', ( req, res) => {
    res.status(200).send(`<h1>Contact Form</h1>`);
});
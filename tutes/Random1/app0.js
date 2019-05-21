const http = require('http');

http.createServer(function(req,res) {

});


function rqListener(req, res) {

}


http.createServer(rqListener);

// http.createServer((req,res) => {
//     console.log(req);
// })
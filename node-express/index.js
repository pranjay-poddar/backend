const express = require('express');
const http = require('http');
const morgan = require('morgan');
const hostname = 'localhost';
const port = 3000;


const dishRouter = require('./routes/dishRouter');
// const dishIDRouter = require('./routes/dishRouter');
const app = express();
app.use(morgan('dev'));
app.use(express.json()); //in place of body-parser
app.use(express.static(__dirname + '/public'));
app.use('/dishes', dishRouter);
app.use('/dishes/dishID', dishRouter);



app.use((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<html><body><h1>This is an Express Server</h1></body></html>');
});

const server = http.createServer(app);

server.listen(port, hostname, () => {
    console.log(`Server is running at http://${hostname}:${port}`);
})
const express = require('express');
const http = require('http');
const morgan = require('morgan');
const hostname = 'localhost';
const port = 3000;

const app = express();
app.use(morgan('dev'));
app.use(express.json());
app.use(express.static(__dirname + '/public'));

app.all('/dishes', (req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
});

app.get('/dishes', (req, res, next) => {
    res.end('Will send all the dishes to you');
});

app.post('/dishes', (req, res, next) => {
    res.end('Will add the dish: ' + req.body.name +
        ' with details: ' + req.body.description);
});

app.put('/dishes', (req, res, next) => {
    res.statusCode = 403;
    res.end('PUT operation is not supported on /dishes');
});

app.delete('/dishes', (req, res, next) => {
    res.end('Deleting all the dishes!');
})

app.get('/dishes/:dishID', (req, res, next) => {
    res.end('Will send the details of the dishe: ' +
        req.params.dishID + ' to you');
});

app.post('/dishes/:dishID', (req, res, next) => {
    res.statusCode = 403;
    res.end('POST operation is not supported on /dishes/' + req.params.dishID);

});

app.put('/dishes/:dishID', (req, res, next) => {
    res.write('Updating the dish : ' + req.params.dishID)
    res.end(' Will update the dishe: ' + req.body.name + ' with details: ' +
        req.body.description);
});

app.delete('/dishes/:dishID', (req, res, next) => {
    res.end('Deleting dish: ' + req.params.dishID);
})


app.use((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<html><body><h1>This is an Express Server</h1></body></html>');
});

const server = http.createServer(app);

server.listen(port, hostname, () => {
    console.log(`Server is running at http://${hostname}:${port}`);
})
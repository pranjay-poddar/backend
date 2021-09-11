const express = require('express');
const dishRouter = express.Router();
const app = express();
app.use(express.json()); //in place of body-parser

dishRouter.route('/')
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        next();
    })

.get((req, res, next) => {
    res.end('Will send all the dishes to you');
})

.post((req, res, next) => {
    res.end('Will add the dish: ' + req.body.name +
        ' with details: ' + req.body.description);
})

.put((req, res, next) => {
    res.statusCode = 403;
    res.end('PUT operation is not supported on /dishes');
})

.delete((req, res, next) => {
    res.end('Deleting all the dishes!');
});

module.exports = dishRouter;
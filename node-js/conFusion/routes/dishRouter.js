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



dishRouter.route('/:dishID')
    .get((req, res, next) => {
        res.end('Will send the details of the dish: ' +
            req.params.dishID + ' to you');
    })

.post((req, res, next) => {
    res.statusCode = 403;
    res.end('POST operation is not supported on /dishes/' + req.params.dishID);

})

.put((req, res, next) => {
    res.write('Updating the dish : ' + req.params.dishID)
    res.end(' Will update the dish: ' + req.body.name + ' with details: ' +
        req.body.description);
})

.delete((req, res, next) => {
    res.end('Deleting dish: ' + req.params.dishID);
});


module.exports = dishRouter;
const express = require('express');
const promoRouter = express.Router();
const app = express();
app.use(express.json()); //in place of body-parser

promoRouter.route('/')
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        next();
    })

.get((req, res, next) => {
    res.end('Will send all the promotions to you');
})

.post((req, res, next) => {
    res.end('Will add the promotion: ' + req.body.name +
        ' with details: ' + req.body.description);
})

.put((req, res, next) => {
    res.statusCode = 403;
    res.end('PUT operation is not supported on /promotions');
})

.delete((req, res, next) => {
    res.end('Deleting all the promotions!');
});



promoRouter.route('/:promoID')
    .get((req, res, next) => {
        res.end('Will send the details of the promotion: ' +
            req.params.promoID + ' to you');
    })

.post((req, res, next) => {
    res.statusCode = 403;
    res.end('POST operation is not supported on /promotions/' + req.params.promoID);

})

.put((req, res, next) => {
    res.write('Updating the promotion : ' + req.params.promoID)
    res.end(' Will update the promotion: ' + req.body.name + ' with details: ' +
        req.body.description);
})

.delete((req, res, next) => {
    res.end('Deleting promotion: ' + req.params.promoID);
});


module.exports = promoRouter;
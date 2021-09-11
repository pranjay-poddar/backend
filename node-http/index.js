import { createServer } from 'http';
const hostname = "localhost";
const port = 3000;
import { existsSync, createReadStream } from 'fs';
import { resolve, extname } from 'path';

const server = createServer((req, res) => {
    if (req.method == 'GET') {
        var fileUrl;
        if (req.url == '/') fileUrl = '/index.html';
        else fileUrl = req.url;
        var filePath = resolve('./public' + fileUrl);
        const fileExt = extname(filePath);
        if (fileExt == '.html') {
            existsSync(filePath, (exists) => {
                if (!exists) {
                    res.statusCode = 404;
                    res.setHeader('Content-Type', 'text/html');
                    res.end('<html><body><h1>Error 404: ' + fileUrl +
                        ' not found</h1></body></html>');
                    return;
                }
                res.statusCode = 200;
                res.setHeader('Content-Type', 'text/html');
                createReadStream(filePath).pipe(res);
            });
        } else {
            res.statusCode = 404;
            res.setHeader('Content-Type', 'text/html');
            res.end('<html><body><h1>Error 404: ' + fileUrl +
                ' not a HTML file</h1></body></html>');
        }
    } else {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/html');
        res.end('<html><body><h1>Error 404: ' + req.method +
            ' not supported</h1></body></html>');
    }
})

server.listen(port, hostname, () => {
    console.log(`server is listening at: http://${hostname}:${port}`);
})
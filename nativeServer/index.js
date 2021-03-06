const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    if (req.method === 'GET') {
        res.writeHead(200, {
            'Content-Type': 'text/html; charset=utf-8',
        })
        if (req.url === '/') {
            fs.readFile(path.join(__dirname, 'views', 'index.hbs'), 'utf-8', (err, file) => {
                if (err) throw err;
                res.end(file);
            })
        }
        if (req.url === '/about') {
            fs.readFile(path.join(__dirname, 'views', 'products.hbs'), 'utf-8', (err, file) => {
                if (err) throw err;
                res.end(file);
            })
        }
        if (req.url === '/api/users') {
            res.writeHead(200, {
                'Content-Type': 'text/json'
            });

            const users = [{
                'name': 'Ivan',
                'age': 25,
                'color': 'ginger'
            },
                {
                    'name': 'Ericson',
                    'age': 35,
                    'color': 'brown'
                }
            ];

            res.end(JSON.stringify(users));
        }
    } else if (req.method === 'POST') {
        res.writeHead(200, {
            'Content-Type': 'text/html; charset=utf-8',
        })
        const body = [];
        req.on('data', data => {
            body.push(Buffer.from(data));
        })

        req.on('end', () => {
            const message = body.toString().split('=')[1];
            res.end(`
                <h1>Your name: ${message}</h1>
                <a href="/">To main page</a>
            `);
        })
    }
});
const port = 3000;

server.listen(port, () => {
    console.log(`Server is started on port ${port}`)
});
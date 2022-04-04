const http = require('http');

const server = http.createServer((req, res) => {
    if (req.method === 'GET') {
        res.writeHead(200,{
            'Content-Type': 'text/html',
        })
        res.end(`
        <h1>Form</h1>
        <form method="post" action="/">
            <input type="text" name="title">
            <button type="submit">Send</button>
        </form>
        `)
    } else if (req.method === 'POST') {
        res.writeHead(200,{
            'Content-Type': 'text/html; charset=utf-8',
        })
        const body = [];
        req.on('data', data => {
            body.push(Buffer.from(data));
        })

        req.on('end', () => {
            const message = body.toString().split('=')[1];
            res.end(`<h1>Your name: ${message}</h1>`);
        })
    }
});
const port = 3000;

server.listen(port, () => {
    console.log(`Server is started on port ${port}`)
});
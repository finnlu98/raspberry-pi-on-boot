const http = require('http');

// Create the server
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Server is running\n');
});

// Define the port and host
const port = 3000;
const host = 'localhost';

// Start the server
server.listen(port, host, () => {
    console.log(`Server running at http://${host}:${port}/`);
});
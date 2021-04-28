const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Hello from a sample AWS pipeline app!'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);

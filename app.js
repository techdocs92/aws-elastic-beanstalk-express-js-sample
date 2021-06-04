const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Module 5 push new commit to repo'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);

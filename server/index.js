const express = require('express');
const bodyParser = require('body-parser');
const posts = require('./data/data');
const app = express();

app.use('/', express.static(`${ __dirname }/../public`));

app.get('/api/posts', (req, res) => res.send(posts));

const port = 3000;

app.listen(port, () => console.log(`Listening to port ${ port }`));

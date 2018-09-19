const express = require('express');
const ReactSSR = require('react-dom/server');
const fs = require('fs');
const path = require('path');
const serverEntry = require('../dist/server-entry').default;

const template = fs.readFileSync(path.resolve(__dirname, '..', 'dist', 'index.html'), 'utf8');

const app = express();
app.use('/public', express.static(path.resolve(__dirname, '..', 'dist')));

app.get('*', (req, res) => {
    const appString = ReactSSR.renderToString(serverEntry);
    res.send(template.replace('<!-- app -->', appString));
});

app.listen(3333, () => {
    console.log('server is listening on 3333');
});
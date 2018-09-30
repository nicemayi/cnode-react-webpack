const express = require('express');
const favicon = require('serve-favicon');
const bodyParser = require('body-parser');
const session = require('express-session');
const ReactSSR = require('react-dom/server')
const fs = require('fs')
const path = require('path')

const isDev = process.env.NODE_ENV === 'development'

const app = express();
app.use(bodyParser.json);
app.use(bodyParser.urlencoded({ extended: false, }));
app.use(favicon(path.resolve(__dirname, '../favicon.ico')));
app.use(session({
    maxAge: 10 * 60 * 1000,
    name: 'tid',
    resave: false,
    saveUninitialized: false,
    secret: 'react cnode',
}));

app.use('/api/user', require('./utils/handle-login'));
app.use('/api', require('./utils/proxy'));

if (!isDev) {
    const serverEntry = require('../dist/server-entry').default
    const template = fs.readFileSync(
        path.resolve(__dirname, '..', 'dist', 'index.html'),
        'utf8'
    );
    app.use('/public', express.static(path.resolve(__dirname, '..', 'dist')))
    app.get('*', (req, res) => {
        const appString = ReactSSR.renderToString(serverEntry)
        res.send(template.replace('<!-- app -->', appString))
    })
} else {
    const devStatic = require('./utils/dev-static')
    devStatic(app)
}

app.listen(3333, () => {
    console.log('server is listening on 3333')
})

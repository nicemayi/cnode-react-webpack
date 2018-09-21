const express = require('express')
const favicon = require('serve-favicon');
const ReactSSR = require('react-dom/server')
const fs = require('fs')
const path = require('path')

const isDev = process.env.NODE_ENV === 'development'

const app = express();
app.use(favicon(path.resolve(__dirname, '../favicon.ico')));

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

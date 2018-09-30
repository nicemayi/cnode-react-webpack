const axios = require('axios');

const baseUrl = 'http://cnodejs.org/api/v1';

module.exports = (req, res, next) => {
    const path = req.path;
    const user = req.session.user || {};
    const needAccessToken = req.query.needAccessToken;

    if (needAccessToken && user.needAccessToken) {
        res.status(401).send({
            success: false,
            msg: 'need login',
        });
    }

    const query = Object.assign({}, req.query);
    if (query.needAccessToken) {
        delete query.needAccessToken;
    }

    axios(`${baseUrl}${path}`, {
        method: req.method,
        param: query,
        data: Object.assign({}, req.body, {
            accesstoken: user.accessToken,
        }),
        header: {
            'Content-Type': 'application/x-www-form-urlencode',
        },
    })
        .then(resp => {
            if (resp.status === 200) {
                res.send(resp.data);
            } else {
                res.status(resp.status).send(resp.data);
            }
        })
        .catch(err => {
            if (err.response) {
                res.status(500).send(err.response.data);
            } else {
                res.status(500).send({
                    success: false,
                    msg: 'Unknown error',
                });
            }
        });
};

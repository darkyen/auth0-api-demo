var express = require('express');
var app = express();
var jwt = require('express-jwt');
var jwks = require('jwks-rsa');
var config = require('./config');
var port = process.env.PORT || 3000;

var apiNameSpace = config.apiNameSpace; 
var domain = config.domain;


var jwtCheck = jwt({
    secret: jwks.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: domain + "/.well-known/jwks.json"
    }),
    audience: apiNameSpace,
    issuer: domain,
    algorithms: ['RS256'],
    getToken: function fromHeaderOrQuerystring (req) {
        if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
            return req.headers.authorization.split(' ')[1];
        } else if (req.query && req.query.token) {
            return req.query.token;
        }
        return null;
    }
});

app.use(jwtCheck);

const db = {
    message: 'Nothing'
};


function adminOnly (req, res, next) {
    if (req.user[apiNameSpace + '/role'] === 'admin') {
        return next();
    }
    res.status(401).end('Unauthorized');
}

function hasScope (scope) {
    return function scopeAccess (req, res, next) {
        if (req.user.scope.indexOf(scope) != -1) {
            return next();
        }
        res.status(401).end('Unauthorized');        
    }
}

app.post('/admin-only', adminOnly, hasScope('write:message'), function (req, res) {
    db.message = req.body;
    res.status(200).message(db);
});

app.get('/admin-only', adminOnly, hasScope('read:message'), function(req, res){
    res.status(200).message(db);
});

app.get('/protected', hasScope('read:protected'), function (req, res) {
    res.send('Protected Resource');
});

app.get('/authorized', function (req, res) {
    res.send('Secured Resource');
});

app.use(function (err, req, res, next) {
  res.status(401).end('Unauthorized');
});

app.listen(port);
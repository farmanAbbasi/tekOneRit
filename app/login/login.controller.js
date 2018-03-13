var mongoose = require('mongoose');
var atob = require('atob');
var passport = require('passport');
var PasswordGrantStrategy = require('passport-oauth2-password-grant');
var scopeParam = 'openid address clientinfo user_name email mobile_phone phone profile'
var acessTokenObject;


//Password grant using oauth
passport.use(new PasswordGrantStrategy({
    tokenURL: 'https://teksso.ml/oxauth/seam/resource/restv1/oxauth/token',
    clientID: '@!E682.3CF3.7E50.F55B!0001!B106.828C!0008!745D.6094',
    customHeaders: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': 'Basic QCFFNjgyLjNDRjMuN0U1MC5GNTVCITAwMDEhQjEwNi44MjhDITAwMDghMzhGNy5ERTIyOndlbGNvbWUhMjM='
    }
}, function (accessToken, refreshToken, requestParams, profile, done) {
    setTokenObject(accessToken, refreshToken, requestParams.id_token);
    done(null, profile, );
}));
passport.serializeUser(function (user, cb) {
    cb(null, user);
});
passport.deserializeUser(function (obj, cb) {
    cb(null, obj);
});

// Set token object
function
    setTokenObject(accessToken, refreshToken, idToken) {
    this.acessTokenObject = {
        accessToken: accessToken,
        refreshToken: refreshToken,
        id_token: idToken
    }
}
// Return token object to response
function getTokenObject() {
    return this.acessTokenObject;
}

// , { sort: '_id' }
exports.check = function (req, res) {
    res.json({
        "msg": req.isAuthenticated()
    });
    // Retrieve and return all users from the database.
};


exports.success = function (req, res) {
    var tokenObject = getTokenObject();
    var idTokenObject = JSON.parse(atob(tokenObject.id_token.split('.')[1]));
    res.json({
        'user_name': idTokenObject.user_name,
        'first_name': idTokenObject.given_name,
        'last_name': idTokenObject.family_name,
        'email': idTokenObject.email,
        'access_token': tokenObject.accessToken,
        'refresh_token': tokenObject.refreshToken,
        'id_token': tokenObject.id_token,
    });
    // Update a user identified by the userId in the request
};

exports.login = function (req, res, next) {
    var username = req.query.username;
    var password = req.query.password;
    passport.authenticate('password-grant', {
        username: username,
        password: password,
        scope: scopeParam,
        successRedirect: 'login/success?user=' + username,
        failureRedirect: 'failure',
        failureFlash: false
    })(req, res, next);
};
exports.failure = function (req, res, next) {
    res.status(401).json({
        msg: 'Error'
    });
};
exports.isUserAuthenticated = function (req, res, next) {
    if (req.isAuthenticated())
        return next();
    res.status(401).json({
        msg: 'Unauthorized'
    });
}

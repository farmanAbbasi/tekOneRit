module.exports = app => {
    // users route
    app.use('/api/users', require('./app/users/user.route.js'));
    // post route
    app.use('/api/posts', require('./app/posts/post.route.js'));
    // login route
    app.use('/api/login', require('./app/login/login.route.js'));
    // logout route
    app.use('/api/logout', require('./app/logout/logout.route.js'));
}

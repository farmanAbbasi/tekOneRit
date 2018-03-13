var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var passport= require('passport');
var session = require('express-session');

// create express app
var app = express();

// Set request headers
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4300');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

// To allow any unauthorised self-signed certificate
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

// Set template for node
app.set('view engine', 'ejs');

// Cross-Origin 
app.use(cors({
    origin: 'http://localhost:4300'
}));


// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// json spaces set
app.set('json spaces', 2);

// session management for express
app.use(session({
    secret: 'tekOneSecret',
    resave: true,
    saveUninitialized: false
}));

// Initialize passport & session
app.use(passport.initialize());
app.use(passport.session());

// Configuring the database
var dbConfig = require('./config/database.config.js');
var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect(dbConfig.url);

mongoose.connection.on('error', () => {
    console.log('Could not connect to the database. Exiting now...');
    process.exit();
});

mongoose.connection.once('open', () => {
    console.log("Successfully connected to the database");
})

// define a simple route
app.get('/', (req, res) => {
    res.json({ msg: "Welcome to TEKOne api." });
});

// inject all routes here
require('./routes')(app);

// listen for requests
app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});
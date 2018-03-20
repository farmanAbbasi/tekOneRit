var mongoose = require('mongoose');
var Post = require('./post.model.js');

// , { sort: '_id' }
exports.findAll = function(req, res) {
    Post.find({}, '-_id', function(err, obj) {
        if (!err) {
            res.send(obj);
        } else res.status(404).send({ message: "no posts found" })
    });
    // Retrieve and return all users from the database.
};

exports.findOne = function(req, res) {
    Post.findOne({ posttype: req.params.postType }, '-_id', function(err, obj) {
        if (obj)
            res.send(obj);
        else res.status(404).send({ message: "not found" });
    });
    // Find a single user with a userId
};

exports.update = function(req, res) {
    // Update a user identified by the userId in the request
};

exports.delete = function(req, res) {
    // Delete a user with the specified userId in the request
};
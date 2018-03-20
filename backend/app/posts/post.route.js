const express = require('express');
const router = module.exports = express.Router();
var login = require('../login/login.controller');
var posts = require('./post.controller.js');

// Create a new user
//roter.post('/posts', posts.create);

// Retrieve all posts
router.get('/', login.isUserAuthenticated, posts.findAll);

// Retrieve all posts of particular post type
router.get('/:postType', login.isUserAuthenticated, posts.findOne);

// Update a post
router.put('/:postType', login.isUserAuthenticated, posts.update);

// Delete a post
router.delete('/:postType', login.isUserAuthenticated, posts.delete);
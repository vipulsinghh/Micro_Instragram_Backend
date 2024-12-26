const express = require('express');
const router = express.Router();
const User = require('../models/User');
const Post = require('../models/Post');

// Get all users
router.get('/', async (req, res) => {
    try {
        const users = await User.findAll();
        res.json(users);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Get all posts of a user
router.get('/:userId/posts', async (req, res) => {
    try {
        const posts = await Post.findAll({ where: { userId: req.params.userId } });
        res.json(posts);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Create a post for a user
router.post('/:userId/posts', async (req, res) => {
    try {
        const { title, description, images } = req.body;
        const post = await Post.create({
            title,
            description,
            userId: req.params.userId,
            images
        });

        await User.increment('postCount', { where: { id: req.params.userId } });

        res.status(201).json({ message: 'Post created successfully', post });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
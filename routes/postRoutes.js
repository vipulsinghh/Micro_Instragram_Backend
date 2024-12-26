const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

// Get all posts
router.get('/', async (req, res) => {
    try {
        const posts = await Post.findAll();
        res.json(posts);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Edit a post
router.put('/:postId', async (req, res) => {
    try {
        const { title, description, images } = req.body;
        const [updated] = await Post.update(
            { title, description, images },
            { where: { id: req.params.postId } }
        );
        if (!updated) return res.status(404).json({ message: 'Post not found' });
        res.json({ message: 'Post updated successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Delete a post
router.delete('/:postId', async (req, res) => {
    try {
        const deleted = await Post.destroy({ where: { id: req.params.postId } });
        if (!deleted) return res.status(404).json({ message: 'Post not found' });
        res.json({ message: 'Post deleted successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
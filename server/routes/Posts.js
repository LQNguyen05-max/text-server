const express = require('express');
const router = express.Router();
const { Posts } = require('../models');

router.get('/', async (req, res) => {
    const listOfPosts = await Posts.findAll();
    res.json(listOfPosts);
});

// async is syncing the request handle 
// await is waiting for the promise handle to be resolved before sending request
router.post('/', async (req, res) => {
    const post = req.body;
    await Posts.create(post);
    res.json(post);
});

module.exports = router;
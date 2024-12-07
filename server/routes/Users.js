const express = require('express');
const router = express.Router();
const { Users } = require('../models');
const bcrypt = require('bcrypt'); // bcyrpt is a library that hashes the password and compares the hashed password
const { sign } = require('jsonwebtoken'); // jwt is a library that creates a token for the user
const { validateToken } = require('../middlewares/AuthMiddleware');

router.post('/', async (req, res) => {
  const { username, password } = req.body;
  bcrypt.hash(password, 10).then((hash) => {
    Users.create({
      username: username,
      password: hash,
    });
    res.json('SUCCESS');
  });
});

router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  const user = await Users.findOne({ where: { username: username } });

  if (!user) res.json({ error: "User Doesn't Exist" });

  // bcyrpt is a library that hashes the password and compares the hashed password
  // jwt is a library that creates a token for the user
  bcrypt.compare(password, user.password).then(async (match) => {
    if (!match) res.json({ error: 'Wrong Username And Password Combination!' });
    const accessToken = sign(
      { username: user.usename, id: user.id },
      'importantsecret'
    );
    res.json(accessToken);
  });
});

router.get('/auth', validateToken, (req, res) => {
  res.json(req.user);
});

module.exports = router;

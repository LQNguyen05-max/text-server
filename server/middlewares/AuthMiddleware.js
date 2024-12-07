const { verify } = require('jsonwebtoken');

const validateToken = (req, res, next) => {
  const accessToken = req.header('accessToken');

  if (!accessToken) return res.json({ error: 'User not logged in!' });
  // validate with jwt verify
  try {
    const validToken = verify(accessToken, 'importantsecret');
    // if valid, then next()
    if (validToken) {
      return next();
    }
  } catch (err) {
    return res.json({ error: err });
  }
};

// export validateToken
module.exports = { validateToken };

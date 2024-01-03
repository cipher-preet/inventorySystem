const jwt = require('jsonwebtoken');

// Middleware to verify JWT token
module.exports = (req, res, next) => {

    const token = req.headers.authorization.split(' ')[1];
    console.log("token1",token)

  if (!token) {
    return res.status(401).json({ message: 'Unauthorized - Token missing' });
  }
  const decodedToken = jwt.decode(token);
  console.log("tokenization",decodedToken);
  jwt.verify(token, 'preetisgoodboy', (err, decodedToken) => {
    if (err) {
      console.error('Error verifying token:', err);
      return res.status(401).json({ message: 'Invalid token' });
    }

    if (!decodedToken) {
      console.error('Decoded token is undefined');
      return res.status(401).json({ message: 'Invalid token' });
    }

    console.log('Decoded token:', decodedToken);
    req.user = decodedToken;
    next();
  });
};

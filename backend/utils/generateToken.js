import jwt from 'jsonwebtoken';

const generateToken = (res, userId) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  });
  // Signed token decoded in 'authMiddleware.js'

  res.cookie('jwt', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV !== 'development', // require HTTPS in production
    sameSite: 'strict', // CSRF attack prevention
    maxAge: 2592000000, // expire in 30 days (30*24*60*60*1000)
  });
};

export default generateToken;

const authenticate = (req, res, next) => {
  const auth = req.headers.authorization;
  if (!auth || auth !== 'Bearer secret-token') {
    return res.status(401).json({ error: 'Unauthorized' });
  }
  next();
};

module.exports = authenticate;

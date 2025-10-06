const validateProduct = (req, res, next) => {
  const { name, price } = req.body;
  if (!name || typeof name !== 'string') {
    return res.status(400).json({ error: 'Invalid or missing name' });
  }
  if (!price || typeof price !== 'number') {
    return res.status(400).json({ error: 'Invalid or missing price' });
  }
  next();
};

module.exports = validateProduct;

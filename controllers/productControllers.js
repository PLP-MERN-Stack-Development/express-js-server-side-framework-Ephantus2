let products = []; 

exports.getAllProducts = (req, res) => {
  res.json(products);
};

exports.getProductById = (req, res, next) => {
  const product = products.find(p => p.id === req.params.id);
  if (!product) return next({ status: 404, message: 'Product not found' });
  res.json(product);
};

exports.createProduct = (req, res) => {
  const newProduct = { id: Date.now().toString(), ...req.body };
  products.push(newProduct);
  res.status(201).json(newProduct);
};

exports.updateProduct = (req, res, next) => {
  const index = products.findIndex(p => p.id === req.params.id);
  if (index === -1) return next({ status: 404, message: 'Product not found' });
  products[index] = { ...products[index], ...req.body };
  res.json(products[index]);
};

exports.deleteProduct = (req, res, next) => {
  const index = products.findIndex(p => p.id === req.params.id);
  if (index === -1) return next({ status: 404, message: 'Product not found' });
  products.splice(index, 1);
  res.status(204).end();
};

exports.getAllProducts = (req, res) => {
  let result = [...products];


  if (req.query.minPrice) {
    result = result.filter(p => p.price >= Number(req.query.minPrice));
  }

  if (req.query.search) {
    const keyword = req.query.search.toLowerCase();
    result = result.filter(p => p.name.toLowerCase().includes(keyword));
  }

  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 5;
  const start = (page - 1) * limit;
  const end = page * limit;

  const paginated = result.slice(start, end);

  res.json({
    page,
    total: result.length,
    products: paginated,
  });
};


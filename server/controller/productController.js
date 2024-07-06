const Product = require('../models/product');

exports.addProduct = async (req, res) => {
  try {
    const { name, price, weight, quantity, category, image } = req.body;
    const newProduct = await Product.create({
      name,
      image,
      price,
      weight,
      quantity,
      category,
    });

    res.status(201).json(newProduct);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to add product', error });
  }
};

exports.getProducts = async (req, res) => {
  try {
    const products = await Product.findAll();
    res.status(200).json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to fetch products', error });
  }
};

const Category = require('../models/category');

exports.addCategory = async (req, res) => {
  try {
    const { name, image } = req.body;
    const newCategory = await Category.create({
      name,
      image,
    });

    res.status(201).json(newCategory);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to add product', error });
  }
};

exports.getCategories = async (req, res) => {
  try {
    const categories = await Category.findAll();
    res.status(200).json(categories);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to fetch products', error });
  }
};

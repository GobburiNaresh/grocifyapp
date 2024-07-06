const Slide = require('../models/slide');

exports.addSlice = async (req, res) => {
  try {
    const { name, image } = req.body;
    const newSlide = await Slide.create({
      name,
      image,
    });

    res.status(201).json(newSlide);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to add product', error });
  }
};

exports.getSlide = async (req, res) => {
  try {
    const slides = await Slide.findAll();
    res.status(200).json(slides);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to fetch products', error });
  }
};

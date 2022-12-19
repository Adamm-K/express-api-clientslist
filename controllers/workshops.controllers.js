const Workshop = require('../models/workshop.model');

exports.getAll = async (req, res) => {
  try {
    res.json(await Workshop.find());
  } catch (err) {
    res.status(500).json({ message: err });
  }
};
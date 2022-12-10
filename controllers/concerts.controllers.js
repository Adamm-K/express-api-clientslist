const Concert = require('../models/concert.model');

exports.getAll = async (req, res) => {
  try {
    res.json(await Concert.find());
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

exports.getRandom = async (req, res) => {
  try {
    const count = await Concert.countDocuments();
    const rand = Math.floor(Math.random() * count);
    const conc = await Concert.findOne().skip(rand);
    if (!conc) res.status(404).json({ message: 'Not found' });
    else res.json(conc);
  } catch (err) {
    res.status(500).json({ message: 'OK' });
  }
};

exports.getById = async (req, res) => {
  try {
    const conc = await Concert.findById(req.params.id);
    if (!conc) res.status(404).json({ message: 'Not found' });
    else res.json(conc);
  } catch (err) {
    res.status(500).json({ message: 'OK' });
  }
};

exports.getByName = async (req, res) => {
  try {
    const performer = req.params.performer;
    const conc = await Concert.find({ performer: performer });
    if (!conc) res.status(404).json({ message: 'Not found' });
    else res.json(conc);
  } catch (err) {
    res.status(500).json({ message: 'OK' });
  }
};

exports.getByGenre = async (req, res) => {
  try {
    const genre = req.params.genre;
    const conc = await Concert.find({ genre: genre });
    if (!conc) res.status(404).json({ message: 'Not found' });
    else res.json(conc);
  } catch (err) {
    res.status(500).json({ message: 'OK' });
  }
};

exports.getByPrice = async (req, res) => {
  try {
    const priceMin = req.params.price_min;
    const priceMax = req.params.price_max;

    const conc = await Concert.find({
      price: { $gt: priceMin, $lt: priceMax },
    });
    if (!conc) res.status(404).json({ message: 'Not found' });
    else res.json(conc);
  } catch (err) {
    res.status(500).json({ message: 'OK' });
  }
};

exports.getByDay = async (req, res) => {
  try {
    const day = req.params.day;
    const conc = await Concert.find({ day: day });
    if (!conc) res.status(404).json({ message: 'Not found' });
    else res.json(conc);
  } catch (err) {
    res.status(500).json({ message: 'OK' });
  }
};

exports.postOne = async (req, res) => {
  try {
    const { performer, genre, price, day, image } = req.body;
    const newConcert = new Concert({
      performer: performer,
      genre: genre,
      price: price,
      day: day,
      image: image,
    });
    await newConcert.save();
    res.json({ message: 'ok' });
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

exports.putOne = async (req, res) => {
  const { performer, genre, price, day, image } = req.body;
  try {
    const conc = await Concert.findById(req.params.id);
    if (conc) {
      await Concert.updateOne(
        { _id: req.params.id },
        {
          $set: {
            performer: performer,
            genre: genre,
            price: price,
            day: day,
            image: image,
          },
        }
      );
      res.json({ message: 'ok' });
    } else res.status(404).json({ message: 'Not found' });
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

exports.deleteById = async (req, res) => {
  try {
    const conc = await Concert.findById(req.params.id);
    if (conc) {
      await Concert.deleteOne({ _id: req.params.id });
      req.json({ message: 'ok' });
    } else res.status(404).json({ message: err });
  } catch (err) {
    res.status(500).json({ message: err });
  }
};
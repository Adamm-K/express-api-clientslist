const express = require('express');
const uuidv4 = require('uuid');
const db = require('./../db.js');

const router = express.Router();

router.route('/concerts').get((req, res) => {
  res.json(db.concerts);
});

router.route('/concerts/random').get((req, res) => {
  res.json(db.concerts[Math.floor(Math.random() * db.concerts.length)]);
});

router.route('/concerts/:id').get((req, res) => {
  res.json(db.concerts.find((data) => data.id == req.params.id));
});

router.route('/concerts').post((req, res) => {
  const { author, text } = req.body;
  const id = uuidv4();

  const newTestimonial = {
    id: id,
    author: author,
    text: text,
  };

  db.concerts.push(newTestimonial);
  res.json({ message: 'ok' });
});

router.route('/concerts/:id').put((req, res) => {
  const id = req.params.id;
  const findTestimonial = db.concerts.find((data) => data.id == id);
  const index = db.concerts.indexOf(findTestimonial);
  const { author, text } = req.body;
  const changeTestimonial = {
    id: id,
    author: author,
    text: text,
  };

  db.concerts[index] = changeTestimonial;
  res.json({ message: 'ok' });
});

router.route('/concerts/:id').delete((req, res) => {
  const element = db.concerts.find((data) => data.id == req.params.id);
  const index = db.concerts.indexOf(element);

  db.concerts.splice(index, 1);
  res.json({ message: 'ok' });
});

module.exports = router;
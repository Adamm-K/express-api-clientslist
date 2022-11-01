const express = require('express');
const uuidv4 = require('uuid');
const db = require('./../db.js');

const router = express.Router();

router.route('/testimonials').get((req, res) => {
  res.json(db.testimonials);
});

router.route('/testimonials/random').get((req, res) => {
  res.json(db.testimonials[Math.floor(Math.random() * db.testimonials.length)]);
});

router.route('/testimonials/:id').get((req, res) => {
  res.json(db.testimonials.find((data) => data.id == req.params.id));
});

router.route('/testimonials').post((req, res) => {
  const { author, text } = req.body;
  const id = uuidv4();

  const newTestimonial = {
    id: id,
    author: author,
    text: text,
  };

  db.testimonials.push(newTestimonial);
  res.json({ message: 'ok' });
});

router.route('/testimonials/:id').put((req, res) => {
  const id = req.params.id;
  const findTestimonial = db.testimonials.find((data) => data.id == id);
  const index = db.testimonials.indexOf(findTestimonial);
  const { author, text } = req.body;
  const changeTestimonial = {
    id: id,
    author: author,
    text: text,
  };

  db.testimonials[index] = changeTestimonial;
  res.json({ message: 'ok' });
});

router.route('/testimonials/:id').delete((req, res) => {
  const element = db.testimonials.find((data) => data.id == req.params.id);
  const index = db.testimonials.indexOf(element);

  db.testimonials.splice(index, 1);
  res.json({ message: 'ok' });
});

module.exports = router;
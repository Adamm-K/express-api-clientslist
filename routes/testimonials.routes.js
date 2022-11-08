const express = require('express');

const router = express.Router();

const TestimonialController = require('../controllers/testimonials.controllers');

router.route('/testimonials').get(TestimonialController.getAll);

router.route('/testimonials/random').get(TestimonialController.getRandom);

router.route('/testimonials/:id').get(TestimonialController.getById);

router.route('/testimonials').post(TestimonialController.postOne);

router.route('/testimonials/:id').put(TestimonialController.putOne);

router.route('/testimonials/:id').delete(TestimonialController.deleteById);

module.exports = router;
const express = require('express');

const router = express.Router();

const ConcertController = require('../controllers/concerts.controllers');

router.route('/concerts').get(ConcertController.getAll);

router.route('/concerts/random').get(ConcertController.getRandom);

router.route('/concerts/performer/:performer').get(ConcertController.getByName);

router.route('/concerts/genre/:genre').get(ConcertController.getByGenre);

router.route('/concerts/price/day/:day').get(ConcertController.getByDay);

router
  .route('/concerts/price/:price_min/:price_max')
  .get(ConcertController.getByPrice);
  
router.route('/concerts/:id').get(ConcertController.getById);

router.route('/concerts').post(ConcertController.postOne);

router.route('/concerts/:id').put(ConcertController.putOne);

router.route('/concerts/:id').delete(ConcertController.deleteById);

module.exports = router;
const express = require('express');

const router = express.Router();

const ConcertController = require('../controllers/concerts.controllers');

router.route('/concerts').get(ConcertController.getAll);

router.route('/concerts/random').get(ConcertController.getRandom);

router.route('/concerts/:id').get(ConcertController.getById);

router.route('/concerts').post(ConcertController.postOne);

router.route('/concerts/:id').put(ConcertController.putOne);

router.route('/concerts/:id').delete(ConcertController.deleteById);

module.exports = router;
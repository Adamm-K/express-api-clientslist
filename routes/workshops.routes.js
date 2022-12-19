const express = require('express');
const router = express.Router();

const WorkshopController = require('../controllers/workshops.controllers');

router.route('/workshops').get(WorkshopController.getAll);

module.exports = router;
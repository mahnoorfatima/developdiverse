const express = require('express');
const jobController = require('../controller/jobController');

const router = express.Router();

router.get('/check', (req, res) => res.json({ status: 'Ok' }));

router.get('/jobs/:id', jobController.getJobs);

module.exports = router;
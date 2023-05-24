const express = require('express');

const apiController = require('../controllers/apiController.js')

const router = express.Router()


router.get('/', apiController.getLore, (req, res) => {
  res.status(200).json(res.locals.lore)
})


module.exports = router;
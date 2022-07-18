const express = require('express')
const router = express.Router()

//Setting index.js router
router.get('/', (req, res) => {
  res.render('index')
})

module.exports = router
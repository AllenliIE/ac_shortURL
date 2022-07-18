const express = require('express')
const router = express.Router()
const home = require('./modules/home')
const URLs = require('./modules/URLs')

router.use('/', home)
router.use('/', URLs)

module.exports = router


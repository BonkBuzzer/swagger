const express = require('express')
const router = express.Router()
const { decodeTokens } = require('../controllers/user.controllers')

router.get('/decodeNow', decodeTokens)

module.exports = router
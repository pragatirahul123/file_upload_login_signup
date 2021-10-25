const express = require('express')
const router = express.Router()



router.use('/signup', require('./signup_route'))

router.use('/login',require('./login_route'))


module.exports = router


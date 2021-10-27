const express = require('express')
const router = express.Router()



router.use('/signup', require('./signup_route'))

router.use('/login',require('./login_route'))

router.use('/postitem',require('./item_post_route'))

router.use('/getitem',require('./item_get_route'))

router.use("/putitem",require('./item_put_route'))

router.use("/deleteitem",require('./item_delete_route'))




module.exports = router;
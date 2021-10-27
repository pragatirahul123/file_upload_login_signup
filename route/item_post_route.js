const express = require('express')
const tokendata = require("../middleware/authetication")

const router = express.Router()
const CreateController = require('../controller/item_post')

router.post('/',tokendata,CreateController.item_order)

module.exports =router
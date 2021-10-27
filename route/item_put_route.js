const express = require('express')
const tokendata = require("../middleware/authetication")

const router = express.Router()
const UpdateController = require('../controller/item_put')

router.put('/:id',tokendata,UpdateController.update_item)

module.exports =router

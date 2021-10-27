const express = require('express')
const tokendata = require("../middleware/authetication")


const router = express.Router()
const CreateController = require('../controller/item_get')

router.get('/',tokendata, CreateController.get_item)

module.exports =router
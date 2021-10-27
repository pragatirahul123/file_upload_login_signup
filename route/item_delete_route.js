const express = require('express')
const tokendata = require("../middleware/authetication")

const router = express.Router()
const DeleteController = require('../controller/item_delete')

router.delete('/:id',tokendata,DeleteController.delete_item)

module.exports =router
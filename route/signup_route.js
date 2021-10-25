const express = require("express")
const router = express.Router()
const registerControoler=require('../controller/signup_file')

router.post("/",registerControoler.register)


module.exports =router
const express = require("express")
const router = express.Router()
const loginControoler=require('../controller/login_file')

router.get("/",loginControoler.login)


module.exports =router
const express = require("express")
const router = express.Router()
const registerControoler=require('../controller/signup_file')
const upload = require('../controller/file');

router.post("/",upload.single("profile_picture"), registerControoler.register)


module.exports =router
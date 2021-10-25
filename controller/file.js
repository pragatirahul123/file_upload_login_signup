const express = require("express")
const connection=require("../database_connection/config")

const multer = require('multer')
const express = require("express")
const connection=require("../database_connection/config")
const multer = require('multer')
const path = require('path')
const router = express.Router()


//storage file


const filestorage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'./files_pdf')
    },
    filename:(req,file,cb)=> {
        cb(null,Date.now()+ "--" + file.originalname);
    },
})

//upload file

const uploadfile = multer({
    storage:filestorage,
    limits:{fileSize:1000000},
    fileFilter(req,file,cb)
    {
        if (!file.originalname.match(/\.(png|jpg($/)){
            return cb(new Error('uploadfile'))
        }
        cb(undefined,true)
    }

})

module.exports.uploadfile =uploadfile;
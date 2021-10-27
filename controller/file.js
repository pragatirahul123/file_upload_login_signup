const multer = require('multer')

//storage file
const filestorage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'files')
    },
    filename:(req,file,cb)=> {
        cb(null,Date.now()+ "__" + file.originalname);
    },
})

//upload file

const uploadfile = multer({
    storage:filestorage
});

module.exports = uploadfile;





